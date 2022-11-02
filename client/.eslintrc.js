module.exports = {
    env: {
        "browser": true,
        "commonjs": true,
        "es6": true,
        "node": true
    },
    parser: "@typescript-eslint/parser",
    parserOptions: {
        "ecmaVersion": 2021,
        "sourceType": "module",
        "ecmaFeatures": {"legacyDecotators": true}
    },
    extends: [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:import/typescript",
        "next/core-web-vitals"
    ],
    plugins: [
        "import",
        "unused-imports"
    ],
    settings: {
        "react": {"version": "17"},
        "import/resolver": {"typescript": {"project": __dirname}}
    },
    rules: {
        "semi": ["warn", "always"],
        "quotes": ["error", "double", {"allowTemplateLiterals": true}],
        "indent": "off",
        "@typescript-eslint/indent": [
            "error",
            4, {
                "SwitchCase": 1,
                "ignoredNodes": ["ClassBody.body > PropertyDefinition[decorators.length > 0] > .key"]
            }
        ],
        "no-console": "off",
        "no-unused-vars": "off",
        "curly": "warn",
        "comma-dangle": "warn",
        "object-curly-spacing": ["warn","never"],
        "object-curly-newline": ["warn", {"multiline": true}],
        "jsx-quotes": ["error", "prefer-double"],
        "react/jsx-tag-spacing": "error",
        "arrow-parens": ["error", "always"],
        "array-bracket-spacing": ["error", "never"],
        "import/no-unresolved": "error",
        "unused-imports/no-unused-imports": "error",
        "import/newline-after-import": ["error", {}],
        "keyword-spacing": ["error", {"before": true, "after": true}],
        "no-multiple-empty-lines": ["error", {"max": 2, "maxEOF": 0}],
        "@typescript-eslint/member-delimiter-style": ["error", {
            "multiline": {
                "delimiter": "semi",
                "requireLast": true
            },
            "singleline": {
                "delimiter": "semi",
                "requireLast": true
            }
        }],
        "@typescript-eslint/no-unused-vars": ["error", {
            "vars": "all",
            "args": "after-used",
            "argsIgnorePattern": "_*",
            "varsIgnorePattern": "_*",
            "ignoreRestSiblings": true
        }],
        "react/no-unknown-property": [
            "error",
            {
                "ignore": [
                    "jsx",
                    "global"
                ]
            }
        ],
        "@typescript-eslint/explicit-module-boundary-types": 0,
        "@typescript-eslint/no-explicit-any": 0,
        "@typescript-eslint/ban-ts-comment": 0,
        "no-multi-spaces": "error",
        "eol-last": 1,
        "react/prop-types": 0,
        "react/display-name": 0
    }
};
