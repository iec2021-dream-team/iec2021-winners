/*
    Route the URL and app to the correct service
**/

const qrroute = require('express').Router();
const qr = require('./payqr')
const qrpoint = require('./qrpoints')

// user wants to pay with money
qrroute.get('/payqr', qr); 
// user wants to pay with points 
qrroute.get('/qrpoints', qrpoint)


module.exports = qrroute
