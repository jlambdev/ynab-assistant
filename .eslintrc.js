const path = require('path');

module.exports = {
    extends: [
        'airbnb-typescript',
        'plugin:react/recommended',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:import/typescript',
        'plugin:@typescript-eslint/recommended',
        'prettier/@typescript-eslint',
        'plugin:prettier/recommended',
        'plugin:jest/all',
    ],
    globals: {
        document: true,
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
    plugins: ['react-hooks', 'jest'],
    rules: {
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',

        '@typescript-eslint/no-angle-bracket-type-assertion': 'off',
    },
    settings: {
        'import/resolver': {
            node: {
                paths: [path.resolve(__dirname, 'src')],
            },
            webpack: {
                config: {
                    resolve: {
                        extensions: ['.js', '.jsx', '.ts', '.tsx'],
                    },
                },
            },
        },
        react: {
            version: 'detect',
        },
    },
};
