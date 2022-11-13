var npmSeries = require('npm-run-series')

npmSeries(['test-up'], function (err:Error) {

})
npmSeries(['test-db-down'], function (err:Error) {

})