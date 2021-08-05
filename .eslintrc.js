module.exports = {
    "root": true,
    "overrides": [
        {
            "files": ["*.html"],
            "parser": "@angular-eslint/template-parser",
            "plugins": [
                "@angular-eslint/template",
            ],
            "rules": {},
        },
        {
            "files": ["*.[jt]s"],
            "env": {
                "browser": true,
                "es2021": true,
            },
            "plugins": [
                "eslint-plugin-prefer-arrow",
                "eslint-plugin-jsdoc",
                "eslint-plugin-import",
                "sonarjs",
            ],
            "extends": [
                "eslint:recommended",
            ],
            "rules": {

                "indent": [
                    "error",
                    4,
                    {"SwitchCase": 1},
                ],
                "quotes": [
                    "error",
                    "double",
                ],
                "semi": [
                    "error",
                    "always",
                ],
                "no-undef": "off",
                "no-await-in-loop": "error",
                "no-template-curly-in-string": "error",
                "default-param-last": "error",
                "no-constructor-return": "error",
                "no-else-return": "error",
                "radix": "error",
                "block-spacing": "error",
                "brace-style": "error",
                "comma-dangle": ["error", "always-multiline"],
                "comma-spacing": ["error", {
                    "before": false,
                    "after": true,
                }],
                "prefer-template": "error",
                "comma-style": ["error", "last"],
                "eol-last": ["error", "always"],
                "no-trailing-spaces": "error",
                "no-whitespace-before-property": "error",
                "object-property-newline": ["error", {"allowAllPropertiesOnSameLine": true}],
                "semi-spacing": "error",
                "space-in-parens": ["error", "never"],
                "arrow-body-style": ["error", "as-needed"],
                "arrow-parens": ["error", "always"],
                "arrow-spacing": "error",
                "no-duplicate-imports": "error",
                "prefer-arrow-callback": "error",
                "prefer-const": "error",
                "no-var": "error",
                "newline-before-return": "error",
                "no-use-before-define": ["error", {"classes": false, "functions": false}],
                "no-cond-assign": "error",
                "no-duplicate-case": "error",
                "template-curly-spacing": "error",
                "no-prototype-builtins": "off",
                "complexity": [
                    "error",
                    {
                        "max": 20,
                    },
                ],
                "constructor-super": "error",
                "curly": "error",
                "dot-notation": "error",
                "eqeqeq": [
                    "error",
                    "always",
                ],
                "guard-for-in": "error",
                "id-blacklist": "error",
                "id-match": "error",
                "import/no-deprecated": "error",
                "import/order": "error",
                "jsdoc/check-alignment": "error",
                "jsdoc/check-indentation": "error",
                "jsdoc/newline-after-description": "error",
                "jsdoc/no-types": "error",
                "max-classes-per-file": [
                    "off",
                    2,
                ],
                "max-len": [
                    "error",
                    {
                        "code": 190,
                    },
                ],
                "max-lines": [
                    "error",
                    500,
                ],
                "max-lines-per-function": [
                    "error",
                    {
                        "max": 220,
                    },
                ],
                "new-parens": "error",
                "newline-per-chained-call": "off",
                "no-bitwise": "off",
                "no-caller": "error",
                "no-console": [
                    "error",
                    {
                        "allow": [
                            "log",
                            "warn",
                            "dir",
                            "time",
                            "timeEnd",
                            "timeLog",
                            "assert",
                            "clear",
                            "count",
                            "countReset",
                            "group",
                            "groupEnd",
                            "table",
                            "dirxml",
                            "error",
                            "groupCollapsed",
                            "Console",
                            "profile",
                            "profileEnd",
                            "timeStamp",
                            "context",
                        ],
                    },
                ],
                "no-debugger": "error",
                "no-empty": "error",
                "no-eval": "error",
                "no-fallthrough": "error",
                "no-invalid-this": "off",
                "no-magic-numbers": "off",
                "no-new-wrappers": "error",
                "no-param-reassign": "off",
                "no-redeclare": "error",
                "no-restricted-imports": [
                    "error",
                ],
                "no-shadow": "error",
                "no-undef-init": "error",
                "no-underscore-dangle": "error",
                "no-unsafe-finally": "error",
                "no-unused-expressions": "off",
                "no-unused-labels": "error",
                "object-shorthand": "error",
                "one-var": [
                    "error",
                    "never",
                ],
                "padding-line-between-statements": [
                    "error",
                    {
                        "blankLine": "always",
                        "next": "return",
                        "prev": "*",
                    },
                ],
                "prefer-arrow/prefer-arrow-functions": "off",
                "sonarjs/cognitive-complexity": "off",
                "sonarjs/no-collapsible-if": "error",
                "sonarjs/no-identical-conditions": "error",
                "sonarjs/no-identical-functions": "error",
                "spaced-comment": [
                    "error",
                    "always",
                    {
                        "markers": [
                            "/",
                        ],
                    },
                ],
                "use-isnan": "error",
                "valid-typeof": "error",
                "no-throw-literal": "error",
            },
        },
        {
            "files": ["*.ts"],
            "plugins": [
                "@typescript-eslint",
                "@typescript-eslint",
                "eslint-plugin-prefer-arrow",
                "eslint-plugin-jsdoc",
                "eslint-plugin-import",
                "sonarjs",
            ],
            "extends": [
                "eslint:recommended",
                "plugin:@typescript-eslint/recommended",
                "plugin:@typescript-eslint/eslint-recommended",
                "plugin:@typescript-eslint/recommended-requiring-type-checking",
            ],
            "parser": "@typescript-eslint/parser",
            "parserOptions": {
                "ecmaVersion": 12,
                "sourceType": "module",
                "project": [
                    "tsconfig.json",
                ],
                "createDefaultProgram": true,
            },
            "rules": {
                "@typescript-eslint/no-explicit-any": "off",
                "@typescript-eslint/ban-ts-comment": "off",
                "@typescript-eslint/explicit-module-boundary-types": "off",
                "@typescript-eslint/adjacent-overload-signatures": "error",
                "@typescript-eslint/ban-types": [
                    "error",
                    {
                        "types": {
                            "Boolean": {
                                "message": "Avoid using the `Boolean` type. Did you mean `boolean`?",
                            },
                            "Function": {
                                "message": "Avoid using the `Function` type. Prefer a specific function type, like `() => void`.",
                            },
                            "Number": {
                                "message": "Avoid using the `Number` type. Did you mean `number`?",
                            },
                            "Object": {
                                "message": "Avoid using the `Object` type. Did you mean `object`?",
                            },
                            "String": {
                                "message": "Avoid using the `String` type. Did you mean `string`?",
                            },
                            "Symbol": {
                                "message": "Avoid using the `Symbol` type. Did you mean `symbol`?",
                            },
                        },
                    },
                ],
                "@typescript-eslint/dot-notation": "error",
                "@typescript-eslint/consistent-type-assertions": "error",
                "@typescript-eslint/array-type": ["error", {"default": "array"}],
                "@typescript-eslint/explicit-function-return-type": ["warn", {"allowExpressions": true}],
                "@typescript-eslint/explicit-member-accessibility": ["error", {
                    "accessibility": "explicit",
                    "overrides": {
                        "accessors": "explicit",
                        "constructors": "explicit",
                        "parameterProperties": "explicit",
                    },
                }],
                "@typescript-eslint/no-var-requires": "off",
                "@typescript-eslint/prefer-for-of": "error",
                "@typescript-eslint/consistent-type-definitions": ["error", "interface"],
                "@typescript-eslint/indent": [
                    "error",
                    4,
                    {
                        "ArrayExpression": "first",
                        "FunctionDeclaration": {
                            "parameters": "first",
                        },
                        "FunctionExpression": {
                            "parameters": "first",
                        },
                        "ObjectExpression": "first",
                    },
                ],
                "@typescript-eslint/member-delimiter-style": [
                    "error",
                    {
                        "multiline": {
                            "delimiter": "semi",
                            "requireLast": true,
                        },
                        "singleline": {
                            "delimiter": "semi",
                            "requireLast": false,
                        },
                    },
                ],
                "@typescript-eslint/member-ordering": "off",
                "@typescript-eslint/naming-convention": "off",
                "@typescript-eslint/no-empty-function": ["error", {"allow": ["constructors"]}],
                "@typescript-eslint/no-empty-interface": "error",
                "@typescript-eslint/no-for-in-array": "error",
                "@typescript-eslint/no-inferrable-types": "error",
                "@typescript-eslint/no-misused-new": "error",
                "@typescript-eslint/no-namespace": "error",
                "@typescript-eslint/no-non-null-assertion": "error",
                "@typescript-eslint/no-parameter-properties": "off",
                "@typescript-eslint/no-shadow": [
                    "error",
                    {
                        "hoist": "all",
                    },
                ],
                "@typescript-eslint/no-unnecessary-type-assertion": "error",
                "@typescript-eslint/no-unused-expressions": "off",
                "@typescript-eslint/no-unused-vars": ["error", {"argsIgnorePattern": "^_"}],
                "@typescript-eslint/no-use-before-define": "error",
                "@typescript-eslint/prefer-function-type": "error",
                "@typescript-eslint/prefer-namespace-keyword": "error",
                "@typescript-eslint/prefer-readonly": "error",
                "@typescript-eslint/quotes": [
                    "error",
                    "double",
                ],
                "@typescript-eslint/semi": [
                    "error",
                    "always",
                ],
                "@typescript-eslint/strict-boolean-expressions": "off",
                "@typescript-eslint/triple-slash-reference": [
                    "error",
                    {
                        "lib": "always",
                        "path": "always",
                        "types": "prefer-import",
                    },
                ],
                "@typescript-eslint/unified-signatures": "error",
            },
        },
    ],
};
