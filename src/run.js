var npmSeries = require('npm-run-series')

npmSeries(['test'], function (err) {

})
npmSeries(['test-down'], function (err) {

})