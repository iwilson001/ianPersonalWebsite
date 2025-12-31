/**
 * @see https://prettier.io/docs/configuration
 * @type {import("prettier").Config}
 */
const config = {
    printWidth: 120,
    trailingComma: 'all',
    tabWidth: 4,
    arrowParens: 'always',
    semi: true,
    singleQuote: true,
    bracketSameLine: false,
    bracketSpacing: true,
    jsxSingleQuote: true,
    useTabs: false,
    plugins: ['prettier-plugin-svelte'],
    overrides: [{ files: '*.svelte', options: { parser: 'svelte' } }],
};

export default config;
