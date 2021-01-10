// TODO:
// database connect
// handle get request to pay
// determine if points or money
// return payment status and balances (json)

const Database = require('../../database/db.js');

//test: http://localhost:8080/payment/balance?id=100123456

module.exports = (req, res, next) => {
    try {
        var id = req.query.id; 
        console.log(id);
        var db = new Database()
        db.query(`SELECT balance, points FROM student_wallet WHERE student_id = ${id}`).then(
            rows => { 
                db.close();
                console.log(rows);
                res.send(rows);
            }
        );
    } catch (e) {
        res.status(400).json({success: false, message:e});
        console.log(e)
    }
}