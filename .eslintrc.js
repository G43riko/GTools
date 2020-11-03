module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
    },
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/eslint-recommended",
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": 12,
        "sourceType": "module",
    },
    "plugins": [
        "@typescript-eslint",
    ],
    "rules": {
        "indent": [
            "error",
            4,
            {"SwitchCase": 1},
        ],
        // "linebreak-style": [
        // 	"error",
        // 	"unix",
        // ],
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
        // "no-shadow": "off",
        "no-else-return": "error",
        "radix": "error",
        "block-spacing": "error",
        "brace-style": "error",
        "comma-dangle": ["error", "always-multiline"],
        "comma-spacing": ["error", {
            "before": false,
            "after": true,
        }],
        "comma-style": ["error", "last"],
        "eol-last": ["error", "always"],
        "no-trailing-spaces": "error",
        "no-whitespace-before-property": "error",
        "object-property-newline": "error",
        "semi-spacing": "error",
        "space-in-parens": ["error", "never"],
        "arrow-body-style": ["error", "as-needed"],
        "arrow-parens": ["error", "always"],
        "arrow-spacing": "error",
        "no-duplicate-imports": "error",
        "prefer-arrow-callback": "error",
        "prefer-const": "error",
        "template-curly-spacing": "error",
        "no-prototype-builtins": "off",
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/ban-ts-comment": "off",
        "@typescript-eslint/explicit-module-boundary-types": "off",
        // "@typescript-eslint/no-non-null-assertion": "off",
        "@typescript-eslint/array-type": ["error", {default: "array"}],
        "@typescript-eslint/explicit-function-return-type": ["warn", {allowExpressions: true}],
        "@typescript-eslint/explicit-member-accessibility": ["error", {accessibility: "explicit"}],
        "@typescript-eslint/no-var-requires": "off",
        "@typescript-eslint/prefer-for-of": "error",
        "@typescript-eslint/consistent-type-definitions": ["error", "interface"],
        "no-throw-literal": "error",
    },
};
