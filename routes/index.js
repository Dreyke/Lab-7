var express = require('express');
var router = express.Router();
var exchangeRates = require('../model/currencyDB');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {title : 'Week 7 Lab'});
});

/* GET convert page */
router.get('/convert', function(req, res, next){

    var dollars = req.query.dollars;
    var toCurrency = req.query.to_currency;

    var converted = dollars * exchangeRates[toCurrency];

    console.log(exchangeRates);

    res.render('results', {
        dollars: dollars,
        toCurrency: toCurrency,
        converted: converted }
    );

});

/* GET about page */
router.get('/about', function(req, res, next) {
    res.render('about', {name: 'Week 7 Site'})
});

module.exports = router;