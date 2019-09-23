module.exports = {
    "extends": ["standard", "eslint:recommended", "plugin:react/recommended"],
    "env": {
        "es6": true,
        "node": true
     },
     "parser": "babel-eslint",
    "parserOptions": {
        "ecmaVersion": 6,
        "ecmaFeatures": {
          "jsx": true
        },
        "sourceType": "module",
      },
    "rules": {
        "semi": [2, "always"]
    }
};