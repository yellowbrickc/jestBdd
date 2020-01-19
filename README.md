![](https://github.com/yellowbrickc/jestBdd/workflows/Node%20CI/badge.svg)

# jestBdd
Example for nodejs specs implemented with jest and cucumber, using [jest-cucumber](https://github.com/bencompton/jest-cucumber) 
and with a report including a pie chart generated with [cucumber-html-reporter](https://github.com/gkushang/cucumber-html-reporter)

## Motivation
Having a working example for running node tests with jest, cucumber report included. Most examples are for UI frameworks with webpack and TypeScript.

## BDD-Specifications and report generation
Running the tests and generating the reports should always happen in two steps.

### Run the tests
```shell script
npm run jest
// or
npm test
```
### Generate the report as separate step
```shell script
npm run report
```

The source and output folder for the HTML report is defined in ./reports/cucumber-report-config.js
As final step this report should be saved with a timestamp or a version to an artifact manager /file system, server, AWS S3, etc)

## to-do
- move the different configurations to one place like config
- persist the artifacts (?)
