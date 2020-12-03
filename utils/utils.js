const fs = require("fs");
const path = require("path");
const os = require("os");
const glob = require("glob");

const newLineDivider = os.EOL;

const KEY = "TESTED_OBJ";

/**
 * Operators
 *  - => - to.be.equal
 *  - ==> - to.deep.equal
 *  - typeof - to.be.an / to.be.a
 */
const utils = {
    parseResultValue: (value) => {
        const replacedValue = value ? value.replace(/[;]/g, "").trim() : value;

        if (replacedValue === "true") {
            return true;
        }
        if (replacedValue === "false") {
            return false;
        }

        if (replacedValue.indexOf("\"") === 0 && replacedValue.lastIndexOf("\"") === replacedValue.length - 1) {
            return replacedValue.substring(1, replacedValue.length - 1);
        }

        if (replacedValue === "undefined") {
            return undefined;
        }
        if (replacedValue === "null") {
            return null;
        }

        const parsedValue = Number(replacedValue);
        if (!isNaN(parsedValue)) {
            return parsedValue;
        }

        if (replacedValue.indexOf("{}") === 0) {
            return {};
        }
        if (replacedValue.indexOf("{") === 0 && replacedValue.lastIndexOf("}") === replacedValue.length - 1) {
            return eval(`(${replacedValue})`);
        }
        if (replacedValue.indexOf("[]") === 0) {
            return [];
        }
        if (replacedValue.indexOf("[") === 0 && replacedValue.lastIndexOf("]") === replacedValue.length - 1) {
            const arrayItems = replacedValue.substring(1, replacedValue.length - 1).split(",");

            return arrayItems.map(utils.parseResultValue);
        }

        return replacedValue;
    },
    stringifyCondition: (operator, resultValue) => {
        if (typeof resultValue === "boolean") {
            return `to.be.${resultValue}`;
        }
        if (typeof resultValue === "undefined") {
            return "to.be.undefined";
        }
        if (resultValue === null) {
            return "to.be.null";
        }

        return `${utils.stringifyOperator(operator)}(${utils.stringifyResultValue(resultValue)})`;
    },
    tabs(count) {
        return "\t".repeat(count);
    },
    stringifyOperator(operator) {
        if (operator === "=>") {
            return "to.be.equal";
        }

        if (operator === "==>") {
            return "to.deep.equal";
        }
        if (operator === "typeof") {
            return "to.be.an";
        }
        throw new Error("Unknown operator " + operator);
    },
    stringifyResultValue: (value) => {
        if (typeof value === "number") {
            return value;
        }

        if (typeof value === "object") {
            if (Array.isArray(value)) {
                return `[${value.map((utils.stringifyResultValue)).join(", ")}]`;
            }

            return JSON.stringify(value);
        }

        return `"${value}"`;
    },
};

const testBuilderUtils = {
    createDescribe: (title, data, tabs = 1) => {
        const text = Array.isArray(data) ? data.join(newLineDivider) : String(data);

        return `${utils.tabs(tabs - 1)}describe("${title}", () => {
${utils.tabs(tabs)}${text}
${utils.tabs(tabs - 1)}});`;
    },
};

const regexps = {
    startComment: "\\/\\*\\*",
    endComment: "\\*\\/",
    endLine: "(\\n|\\r)",
    anyChar: "(.|\\n|\\r)",
    operatorPattern: /(={1,2}>|typeof)/,
    nextJsDocOrEnd: "(@\\w|\\*\\/)",
};
const commentRegexp = new RegExp(
    `${regexps.startComment}${regexps.endLine}+?(${regexps.anyChar}+?)${regexps.endComment}${regexps.anyChar}+?function +(\\w+)`,
    "gi",
);


const testMethod = {
    getTestsFor: (fullPath) => {
        const pathParts = fullPath.split("\\");
        const realFileName = pathParts[pathParts.length - 1];
        const realFileNameWithoutExtension = realFileName.replace(/\.\w+$/, "");
        const fileContent = fs.readFileSync(fullPath, {encoding: "utf8"});
        const commentMath2 = fileContent.match(commentRegexp); //(.|\n)*?function (\w+)

        if (!commentMath2) {
            return "";
        }

        const fileTests = [];

        commentMath2.forEach((item) => {
            // extract everything between '@example' and next jsDoc or comment end

            const testCases = item.match(new RegExp(`@example(${regexps.anyChar}+?)${regexps.nextJsDocOrEnd}+?`));
            const result = {};

            const functionName = item.match(/function +(\w+)/);
            if (functionName) {
                result.functionName = functionName[1];
            }

            if (testCases) {
                result.testData = Array.from(testCases[1].split(/[\n\r]/g)).map((rawLine) => {
                    if (!rawLine) {
                        return {rawLine};
                    }
                    const rawTestCase = rawLine.replace(/^\W*\\*\W*/, "");
                    const operatorMath = rawTestCase.match(regexps.operatorPattern);

                    if (!rawTestCase || !operatorMath) {
                        return {
                            rawLine,
                            rawTestCase,
                        };
                    }
                    const operator = operatorMath[0];
                    const condition = rawTestCase.substring(0, operatorMath.index).replace(/[;]/g, "").trim();
                    const resultValue = utils.parseResultValue(rawTestCase.substring(operatorMath.index + operator.length));

                    const testText = `expect(${KEY}.${condition}).${utils.stringifyCondition(operator, resultValue)};`;

                    return {
                        testText,
                        condition,
                        resultValue,
                        operator,
                        rawLine,
                        rawTestCase,
                    };
                }).filter(({condition, operator}) => condition && operator);


                result.test = `
${utils.tabs(1)}it("It should test function ${result.functionName}", () => {
${result.testData.map(({testText}) => `${utils.tabs(2)}${testText}`).join(newLineDivider)}
${utils.tabs(1)}});`;
                fileTests.push(result.test);
            }
        });
        const newFileContent = [
            "import { expect } from 'chai'",
            "import 'mocha';",
            `import * as ${KEY} from './${realFileNameWithoutExtension}';`,
            testBuilderUtils.createDescribe(realFileNameWithoutExtension, fileTests),
        ];

        return newFileContent.join(newLineDivider) + newLineDivider;
    },

    generateTestForInto: (fullPath, testFilePath = fullPath.replace(/\.([tj]s)$/, (_, extension) => ".generated.spec." + extension)) => {
        const data = testMethod.getTestsFor(fullPath);
        if (!data) {
            return;
        }
        fs.writeFileSync(testFilePath, data, {encoding: "utf8"});
    },
};

const myArgs = process.argv.slice(2);
const filePattern = myArgs[0];

const fullFilePaths = glob.sync(filePattern).filter(e => fs.statSync(e).isFile()).map((e) => {
    console.log(e);

    return path.resolve(e);
});
const begin = Date.now();
console.log(fullFilePaths);
fullFilePaths.forEach((filePath) => {
    const fullFilePath = path.resolve(filePath);
    const start = Date.now();
    testMethod.generateTestForInto(fullFilePath);
    console.log("Generated tests for " + fullFilePath + " in " + (Date.now() - start) + " ms");
});
console.log("Generated " + fullFilePaths.length + " files for " + (Date.now() - begin) + " ms");
