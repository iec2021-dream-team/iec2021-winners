const qrcode = require('qrcode');
var path = require('path');
var fs = require("fs");

//test: http://localhost:8080/qr/qrpoints?id=100123456

module.exports = (req, res, next) => {
    res.setHeader("Access-Control-Allow-Methods", "POST, PUT, OPTIONS, DELETE, GET");
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    ////
    let queryid = req.query.id;
    let direct = 'http://192.53.121.221:8080/payment/pointpay?id='+queryid

    qrcode.toDataURL(direct, function(err, url) {
        //console.log(url)
        tpath = path.join(__dirname+'/code.html');
        //console.log(tpath)
        //
        fs.readFile(tpath, {encoding: 'utf-8'}, function(err, data) {
            data = data.replace(/##qUrl/g, url);
            //console.log(data)
            res.send(data)
        });
    });
}