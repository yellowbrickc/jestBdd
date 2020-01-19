module.exports = {
    presets: [[
        '@babel/preset-env',
        {
            targets: {node: 'current'}
        }
    ]],
    plugins: [
        ['module-resolver', {
            alias: {
                'jest-cucumber': './node_modules/jest-cucumber/dist/src'
            }
        }]
    ]
};
