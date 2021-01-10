const payroute = require('express').Router();
const pay = require('./pay')
const balance = require('./balance');
const refill = require('./refill');

payroute.get('/pay', pay); 
payroute.get('/balance', balance)
payroute.get('/refill', refill)

module.exports = payroute
