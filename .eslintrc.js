module.exports = {

    // "extends": "airbnb-base",
    // "extends": "google",
    // "extends": "grunt",
    // "extends": "idiomatic",
    // "extends": "jquery",
    // "extends": "mdcs",
    // "extends": "node-style-guide",
    // "extends": "wikimedia",
    // "extends": "wordpress",
    // "extends": "eslint:all",
    // "extends": "eslint:recommended",
    // "extends": [ "eslint:recommended", "plugin:react/recommended" ],

    "extends": [ "eslint:recommended", "plugin:react/recommended" ],

    "rules": {
        // enable additional rules
        "indent": ["error", 4],
        "linebreak-style": ["error", "unix"],
        "quotes": ["error", "double"],
        "semi": ["error", "always"],

        // override default options for rules from base configurations
        "comma-dangle": ["error", "always"],
        "no-cond-assign": ["error", "always"],

        // disable rules from base configurations
        "no-console": "off",

        "ext": [".js", ".jsx"],
    },
};