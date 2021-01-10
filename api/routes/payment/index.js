const payroute = require('express').Router();
const pay = require('./pay')

payroute.get('/pay', pay); 

module.exports = payroute