import { expect } from "chai";
import "mocha";
import { TestCase } from "../TestCase";
import { StringUtils } from "./StringUtils";

describe("StringUtils", () => {
    const chars        = "+=§,.-?:_\"!)/()<>*\'$[]}{*&^%$#@!/\\|#&@{}^'`][~\|€¶←↓→º’‘©><§®ª`←'↓&×÷|÷×";
    const caseable     = "þÞıŦŧŊEĐđNΩ";
    const accented     = "ľščťžýáíéäôňŁłŁØÆŁÐø";
    const testString   = "ąàáäâãåæăćčĉęèéëêĝĥìíïîĵłľńňòóöőôõðøśșşšŝťțţŭùúüűûñÿýçżźž";
    const resultString = "aaaaaaaaaccceeeeeghiiiijllnnoooooooossssstttuuuuuunyyczzz";
    const text         = "abcdedabcdedabcdjidABdsdcdsjo";
    const numbers      = "0123456789";

    describe("Capitalize", () => {
        it("It should make first letter to upper and other letter to lower", () => {
            expect(StringUtils.capitalize("gabo")).to.be.equal("Gabo");
            expect(StringUtils.capitalize("GABO")).to.be.equal("Gabo");
            expect(StringUtils.capitalize("gABO")).to.be.equal("Gabo");
        });
    });
    describe("UpperCamelCase", () => {
        it("It should turn string into upper camel case", () => {
            const result = "HelloWorldIAmComputer";
            TestCase.stringHelloWorldIAmComputer.forEach((word) => {
                expect(StringUtils.toUpperCamelCase(word), `'${word}' should be converted to '${result}'`)
                    .to
                    .be
                    .equal(result);
            });
        });
    });
    describe("LowerCamelCase", () => {
        it("It should turn string into lower camel case", () => {
            const result = "helloWorldIAmComputer";
            TestCase.stringHelloWorldIAmComputer.forEach((word) => {
                expect(StringUtils.toLowerCamelCase(word), `'${word}' should be converted to '${result}'`)
                    .to
                    .be
                    .equal(result);
            });
        });
    });
    describe("UpperSnakeCase", () => {
        it("It should turn string into upper snake case", () => {
            const result = "HELLO_WORLD_I_AM_COMPUTER";
            TestCase.stringHelloWorldIAmComputer.forEach((word) => {
                expect(StringUtils.toUpperSnakeCase(word), `'${word}' should be converted to '${result}'`)
                    .to
                    .be
                    .equal(result);
            });
        });
    });
    describe("LowerSnakeCase", () => {
        it("It should turn string into lower snake case", () => {
            const result = "hello_world_i_am_computer";
            TestCase.stringHelloWorldIAmComputer.forEach((word) => {
                expect(StringUtils.toLowerSnakeCase(word), `'${word}' should be converted to '${result}'`)
                    .to
                    .be
                    .equal(result);
            });
        });
    });
    describe("Join", () => {
        it("It should join string by delimiter and append prefix and postfix", () => {
            const notArray: any[] | any = "gabriel";
            const testCase              = ["hello", "my", "world"];
            expect(StringUtils.join(notArray, "///", "<<", ">>")).to.equal("<<" + notArray + ">>");
            expect(StringUtils.join(testCase, " ", "<<", ">>")).to.equal("<<hello my world>>");
            expect(StringUtils.join([], "-", "<<", ">>")).to.equal("<<>>");
            expect(StringUtils.join([], "/")).to.equal("");
        });
    });
    describe("RemoveAccented", () => {
        const notString: string | any = 23;
        const finalTestString         = testString + testString.toUpperCase();
        const finalResultString       = resultString + resultString.toUpperCase();
        it("It should remove accented characters from string", () => {
            expect(StringUtils.removeAccentedCharacters(finalTestString)).to.be.equal(finalResultString);
            expect(StringUtils.removeAccentedCharacters(finalResultString)).to.be.equal(finalResultString);
            expect(StringUtils.removeAccentedCharacters(chars)).to.be.equal(chars);
            expect(StringUtils.removeAccentedCharacters(notString)).to.equal(notString);
        });
    });

    describe("Repeat", () => {
        it("It shoult repeat string multiple times", () => {
            expect(StringUtils.repeat("a", 10)).to.be.equal("aaaaaaaaaa");
            expect(StringUtils.repeat("abc", 10)).to.be.equal("abcabcabcabcabcabcabcabcabcabc");
        });
    });

    describe("Count", () => {
        it("It should return number of occurrences of substring", () => {
            expect(StringUtils.count("I am the most expensive and the best IDE on the world", "the")).to.equal(3);
        });
    });
    describe("RemoveAll", () => {
        it("It should remove all occurrences of substring from string", () => {
            expect(StringUtils.removeAll(text, ["a"])).to.be.equal("bcdedbcdedbcdjidABdsdcdsjo");
            expect(StringUtils.removeAll(text, ["a", "b", "c"])).to.be.equal("deddeddjidABdsddsjo");
        });
    });
    describe("Between", () => {
        it("It should return substring between two substrings", () => {
            expect(StringUtils.between(numbers, "34", "67")).to.be.equal("5");
            expect(StringUtils.between(numbers, "34", "ab")).to.be.equal("56789");
            expect(StringUtils.between(numbers, "ab", "67")).to.be.equal("012345");
        });
    });
    describe("RemoveEmptyLines", () => {
        it("it should remove empty lines from string", () => {
            expect(StringUtils.removeEmptyLines(`



`)).to.be.equal("");

            expect(StringUtils.removeEmptyLines(`

a

b

`)).to.be.equal(`a
b
`);
        });
    });
    describe.skip("Template", () => {
        it("It should replace placeholders with values", () => {
            const params = {
                age: "23",
                name: "Gabo",
            };
            expect(StringUtils.template("{{name}} is {{age}} years old", params)).to.be.equal("Gabo je starý 23 rokov");
        });
    });

    describe("Occurrences", () => {
        it("It should return number of occurrences of substring", () => {
            expect(StringUtils.occurrences("I am the most expensive and the best IDE on the world", "the")).to.equal(3);
        });
    });
    describe("CollapseWhiteSpace", () => {
        it("It should collapse whitespace", () => {
            expect(StringUtils.collapseWhitespace("     i         i         i           ")).to.equal(" i i i ");
            expect(StringUtils.collapseWhitespace("i         i         i")).to.equal("i i i");
        });
    });
    describe("IsEmpty", () => {
        it("It should check if string contains any not white characters", () => {
            expect(StringUtils.isEmpty("     ")).to.be.true;
            expect(StringUtils.isEmpty("    ")).to.be.true;
            expect(StringUtils.isEmpty("")).to.be.true;
            expect(StringUtils.isEmpty(" ")).to.be.true;
            expect(StringUtils.isEmpty("\t")).to.be.true;
            expect(StringUtils.isEmpty("\xa0")).to.be.true;
            expect(StringUtils.isEmpty("\t \xa0\t \xa0")).to.be.true;
            expect(StringUtils.isEmpty("  ")).to.be.true;
            expect(StringUtils.isEmpty("\t\t")).to.be.true;
            expect(StringUtils.isEmpty("\xa0\xa0")).to.be.true;

            expect(StringUtils.isEmpty(" 3 ")).to.be.false;
            expect(StringUtils.isEmpty("a")).to.be.false;
            expect(StringUtils.isEmpty("0")).to.be.false;
            expect(StringUtils.isEmpty("[]")).to.be.false;
            expect(StringUtils.isEmpty("A")).to.be.false;
            expect(StringUtils.isEmpty("{}")).to.be.false;
            expect(StringUtils.isEmpty(".")).to.be.false;
        });
    });
    describe("SwapCase", () => {
        it("It should swap string case", () => {
            expect(StringUtils.swapCase(chars)).to.be.equal(chars);
            expect(StringUtils.swapCase(numbers)).to.be.equal(numbers);
            expect(StringUtils.swapCase(testString)).to.be.equal(testString.toUpperCase());
            expect(StringUtils.swapCase("GABO")).to.be.equal("gabo");
            expect(StringUtils.swapCase("gabo")).to.be.equal("GABO");
            expect(StringUtils.swapCase("GaBo")).to.be.equal("gAbO");
            expect(StringUtils.swapCase("gAbO")).to.be.equal("GaBo");
        });
    });
    describe("GetLastPart", () => {
        it("It should return last part of string divided by delimiter", () => {
            expect(StringUtils.getLastPart("ababababa", "b")).to.be.equal("a");
            expect(StringUtils.getLastPart("ababababaa", "b")).to.be.equal("aa");
            expect(StringUtils.getLastPart("i am here")).to.be.equal("here");
            expect(StringUtils.getLastPart("i ambhere", "b")).to.be.equal("here");
            expect(StringUtils.getLastPart("", "")).to.be.equal("");
            expect(StringUtils.getLastPart("")).to.be.equal("");

        });
    });
    describe("IsValidPhoneNumber", () => {
        it("It should return true if phone number is valid", () => {
            [...TestCase.randomStrings, ...TestCase.emails, ""].forEach((num) => {
                expect(StringUtils.isValidPhoneNumber(num), `'${num}' should not be phone number`).to.be.false;
            });

            TestCase.phoneNumbers.forEach((num) => {
                expect(StringUtils.isValidPhoneNumber(num), `'${num}' should be phone number`).to.be.true;
            });
        });
    });
    describe("GetAsciiArray", () => {
        it("It should return array of number representing giver string ascii numbers", () => {
            expect(StringUtils.getAsciiArray("abcdefg")).to.deep.equal([97, 98, 99, 100, 101, 102, 103]);
        });
    });
    describe("IsValidEmail", () => {
        it("It should return true if email is valid", () => {
            [...TestCase.randomStrings, ...TestCase.phoneNumbers, ...TestCase.notEmails, ""].forEach((email) => {
                expect(StringUtils.isValidEmail(email), `'${email}' should not be email`).to.be.false;
            });

            TestCase.emails.forEach((email) => {
                expect(StringUtils.isValidEmail(email), `'${email}' should be email`).to.be.true;
            });
        });
    });
    describe("JoinSingle", () => {
        it("It should return true if email is valid", () => {
            expect(StringUtils.joinSingle("result", ".", "js")).to.be.equal("result.js");
            expect(StringUtils.joinSingle("result.", ".", "js")).to.be.equal("result.js");
            expect(StringUtils.joinSingle("result", ".", ".js")).to.be.equal("result.js");
            expect(StringUtils.joinSingle("result.", ".", ".js")).to.be.equal("result.js");
        });
    });

});
