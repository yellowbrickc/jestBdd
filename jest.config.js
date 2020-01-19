module.exports = {
    testEnvironment: 'node',
    verbose: true,
    testMatch: [
        '**/*.step.js'
    ],
    moduleFileExtensions: [
        'js',
        'jsx'
    ],
    // testResultsProcessor: "./node_modules/jest-json-reporter",
    reporters: [
        "default",
        [
            "./node_modules/jest-cucumber/dist/src/reporter", //This is the default path
            {
                formatter: "json",
                path: "./reports/test-report.json" //specific path
            }
        ]
    ]
};
