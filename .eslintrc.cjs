module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node":true
    },
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "prettier"
    ],
    "overrides": [
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "2018",
        "sourceType": "module"
    },
    "plugins": [
        "@typescript-eslint",
        "prettier"
    ],
    "rules": {
        "prettier/prettier":2
    //    "no-console":1,
    //    "semi": ["error", "always"],
    //    "quotes": ["error", "double"]
    }

}
