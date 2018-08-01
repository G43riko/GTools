"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TestCase = /** @class */ (function () {
    function TestCase() {
    }
    TestCase.functionSum = function (a, b) {
        if (isNaN(a) || isNaN(b)) {
            throw new Error("Wrong params");
        }
        return a + b;
    };
    TestCase.timesHHmmss = [
        "12:00:00",
        "01:09:09",
        "23:59:59",
        "00:59:59",
        "23:01:01",
    ];
    TestCase.timesHHmm = [
        "12:53",
        "12:00",
        "01:09",
        "23:59",
        "00:59",
        "23:01",
    ];
    TestCase.timesHmm = [
        "1:59",
        "9:09",
        "9:09",
    ];
    TestCase.invalidTimes = [
        "24:00",
        "24:13:56",
        "12:61",
        "12:60",
        "12:59:60",
        "30:61",
        "12:12:61",
        "12:61:61",
        "30:61:61",
    ];
    TestCase.charactersString = "+=§,.-?:_\"!)/()<>*\'$[]}{*&^%$#@!/\\|#&@{}^'`][~\|€¶←↓→º’‘©><§®ª`←'↓&×÷|÷×";
    TestCase.characters = TestCase.charactersString.split("");
    TestCase.charactersCaseAbleString = "þÞıŦŧŊEĐđNΩ";
    TestCase.charactersCaseAble = TestCase.charactersCaseAbleString.split("");
    TestCase.charactersEmpty = [
        "     ",
        "    ",
        "",
        " ",
        "\t",
        "\xa0",
        "\t \xa0\t \xa0",
        "  ",
        "\t\t",
        "\xa0\xa0",
    ];
    TestCase.charactersNotEmpty = [
        " 3 ",
        "a",
        "0",
        "[]",
        "A",
        "{}",
        ".",
        "123",
        "gabriel",
        "Ich bin Hanz",
        "@",
        // "123@123.123",
        "00000000000000000000",
        "\\",
        "/",
        "********",
        "______",
    ];
    TestCase.numbersString = "0123456789";
    TestCase.numbers = TestCase.numbersString.split("");
    TestCase.randomArray = [
        "a",
        1,
        2.32,
        true,
        function (a, b) { return a + b; },
        {},
        null,
        undefined,
        Infinity,
        NaN,
        { a: "aa", b: "bb" },
        ["a", 1, true],
    ];
    TestCase.stringHelloWorldIAmComputer = [
        "Hello world i am computer",
        "HelloWorldIAmComputer",
        "helloWorldIAmComputer",
        "hello_world_i_am_computer",
        "HELLO_WORLD_I_AM_COMPUTER",
        "--------Hello world---i am computer____",
        "hello_World i Am-computer",
        "hello_World i Am-computer-------",
        "-_Hello___world-i--AM    computer",
    ];
    TestCase.upperSnakeCase = [
        "HELLO_WORLD",
        "HELLO_MY_NAME_IS_CHOSE",
    ];
    TestCase.lowerSnakeCase = [
        "hello_world",
        "hello_my_name_is_chose",
    ];
    TestCase.upperCamelCase = [
        "HelloWorld",
        "HelloMyNameIsChose",
    ];
    TestCase.lowerCamelCase = [
        "helloWorld",
        "helloMyNameIsChose",
    ];
    TestCase.randomStrings = TestCase.stringHelloWorldIAmComputer.concat(TestCase.upperSnakeCase, TestCase.lowerSnakeCase, TestCase.upperCamelCase, TestCase.lowerCamelCase);
    TestCase.man = ["Muž", "muz", "MAN", "m", "boY", "chLaPec", "M", "male"];
    TestCase.woman = ["Žena", "zena", "WOMAN", "w", "z", "GiRl", "Dievča", "woman", "female", "f"];
    TestCase.nothing = TestCase.charactersEmpty.concat(TestCase.randomStrings, TestCase.numbers, TestCase.characters, TestCase.charactersCaseAble, TestCase.charactersNotEmpty);
    TestCase.phoneNumbers = [
        "+421905123456",
        "00421905123456",
        "0905123456",
        "+421 905 123 456",
        "00421905 123 456",
        "0905 123 456",
        "(123) 456-7890",
        "(123)456-7890",
        "(048)99-99-999",
        "123-456-7890",
        "123.456.7890",
        "1234567890",
        "+31636363634",
        "075-63546725",
    ];
    TestCase.emails = [
        "abc@def.com",
        "my@name.is.chorche.com",
        "foo.bar@machine.subdomain.example.museum",
        "Abc@example.com",
        // `Abc@example.com.`,
        // `Abc@10.42.0.1`,
        // `user@localserver`,
        "Abc.123@example.com",
        "user+mailbox/department=shipping@example.com",
        "\"very.(),:;<>[]\".VERY.\"very@\\ \"very\".unusual\"@strange.example.com",
        "!#$%&\'*+-/=?^_`.{|}~@example.com",
        "\"()<>[]:,;@\\\"!#$%&\'-/=?^_`{}| ~.a\"@example.org",
        "\"Abc@def\"@example.com",
        "\"Fred Bloggs\"@example.com",
        "\"Joe.\\Blow\"@example.com",
    ];
    TestCase.notEmails = [
        "Abc.example.com",
        "A@b@c@example.com",
        "a\"b(c)d,e:f;g<h>i[j\k]l@example.com",
        "just\"not\"right@example.com",
        "this is\"not\allowed@example.com",
        "this\ still\"not\\allowed@example.com",
        "john..doe@example.com",
        "john.doe@example..com"
    ].concat(TestCase.randomStrings);
    return TestCase;
}());
exports.TestCase = TestCase;
