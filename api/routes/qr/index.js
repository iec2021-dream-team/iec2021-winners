const qrroute = require('express').Router();
const qr = require('./payqr')
const qrpoint = require('./qrpoints')

qrroute.get('/payqr', qr); 
qrroute.get('/qrpoints', qrpoint)


module.exports = qrroute
