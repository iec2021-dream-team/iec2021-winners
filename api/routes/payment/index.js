const payroute = require('express').Router();
const pay = require('./pay')
const balance = require('./balance');
const refill = require('./refill');
const points = require('./pointpay')

payroute.get('/pay', pay); 
payroute.get('/balance', balance)
payroute.get('/refill', refill)
payroute.get('/pointpay', points)

module.exports = payroute
