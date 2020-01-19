![](https://github.com/yellowbrickc/jestBdd/.github/workflows/ci.yml/badge.svg)
# jestBdd
example for nodejs tests implemented with jest and cucumber, using [jest-cucumber](https://github.com/bencompton/jest-cucumber) 
and [cucumber-html-reporter](https://github.com/gkushang/cucumber-html-reporter)

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

