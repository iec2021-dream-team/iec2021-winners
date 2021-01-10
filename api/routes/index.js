// entry point
const routes = require('express').Router();

const payment = require('./payment')
const qrcode = require('./qr')

// note could use body parser for post 

routes.use((req, res, next) => {
    console.log(`Resource: ${req.method} ${req.originalUrl}`);
    next();
});

routes.get('/', (req, res) => {
    //health check
    res.status(200).json({success: true, message:'Alive'});
    next();
});

routes.use('/payment', payment)
routes.use('/qr', qrcode)

module.exports = routes;
