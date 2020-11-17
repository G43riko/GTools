const fs = require("fs");
const path = require("path");
const os = require("os");

const myArgs = process.argv.slice(2);
console.log("myArgs: ", myArgs);
const newLineDivider = os.EOL;

const fileName = myArgs[0];
const KEY = "TESTED_OBJ";
const filePath = path.resolve(fileName);
const pathParts = filePath.split("\\");
const realFileName = pathParts[pathParts.length - 1];
const realFileNameWithoutExtension = realFileName.replace(/\.\w+$/, "");

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

        if (replacedValue.indexOf("[") === 0 && replacedValue.lastIndexOf("]") === replacedValue.length - 1) {
            const arrayItems = replacedValue.substring(1, replacedValue.length - 1).split(", ");

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

        if (Array.isArray(value)) {
            return `[${value.map((utils.stringifyResultValue)).join(", ")}]`;
        }

        return `"${value}"`;
    },
};
const fileContent = fs.readFileSync(filePath, {encoding: "utf8"});

const regexps = {
    startComment: "\\/\\*\\*",
    endComment: "\\*\\/",
    endLine: "(\\n|\\r)",
    anyChar: "(.|\\n|\\r)",
    operatorPattern: /(={1,2}>|typeof)/,
    nextJsDocOrEnd: "(@\\w|\\*\\/)",
};
const mainDescribePrefix = `describe("${realFileNameWithoutExtension}", () => {`;
const mainDescribeSuffix = "});";
const commentRegexp = new RegExp(
    `${regexps.startComment}${regexps.endLine}+?(${regexps.anyChar}+?)${regexps.endComment}${regexps.anyChar}+?function +(\\w+)`,
    "gi",
);
const commentMath2 = fileContent.match(commentRegexp); //(.|\n)*?function (\w+)

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
    mainDescribePrefix,
    ...fileTests,
    mainDescribeSuffix,
];
fs.writeFileSync(
    filePath.replace(/\.([tj]s)$/, (_, extension) => ".g-spec." + extension),
    newFileContent.join(newLineDivider) + newLineDivider,
    {encoding: "utf8"},
);
