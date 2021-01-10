const payroute = require('express').Router();
const pay = require('./pay')
const balance = require('./balance')

payroute.get('/pay', pay); 
payroute.get('/balance', balance)

module.exports = payroute
