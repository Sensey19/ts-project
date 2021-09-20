module.exports = {
    root: true,
    env: {
        browser: true,
        node: true
    },
    settings: {
        'import/resolver': {
            alias: {
                map: [
                    ['@', '.']
                ],
                extensions: ['.vue', '.js']
            }
        }
    },
    parserOptions: {
        ecmaVersion: 12,
        parser: '@typescript-eslint/parser',
        sourceType: 'module',
    },
    extends: [
        'plugin:vue/essential',
        '@vue/airbnb'
    ],
    // add your custom rules here
    rules: {
        radix: 'off',
        'no-shadow': 'off',
        'no-empty': 'off',
        'comma-dangle': ['error', 'never'],
        'no-console': 'off',
        'no-multiple-empty-lines': 'off',
        'vue/require-prop-types': 1,
        'import/extensions': 'off',
        'import/no-unresolved': 'off',
        'no-param-reassign': 'off',
        'no-restricted-syntax': 'off',
        'prefer-destructuring': 'off',
        'import/prefer-default-export': 'off',
        'import/no-extraneous-dependencies': 'off',
        'no-plusplus': 'off',
        'max-len': ['error', {
            code: 110
        }],
        'vue/max-attributes-per-line': ['error', {
            singleline: 3,
            multiline: {
                max: 1,
                allowFirstLine: false
            }
        }]
    }
};
