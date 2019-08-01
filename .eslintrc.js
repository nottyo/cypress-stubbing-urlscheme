module.exports = {
    env: {
        browser: true,
        es6: true,
        'cypress/globals': true,
        node: true
    },
    extends: ['eslint:recommended', 'prettier'],
    parserOptions: {
        ecmaVersion: 2017,
        sourceType: 'module'
    },
    plugins: ['cypress', 'prettier'],
    rules: {
        camelcase: 'warn',
        'linebreak-style': ['error', 'unix']
    }
}
