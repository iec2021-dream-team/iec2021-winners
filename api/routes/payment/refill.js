// refill card balance
const Database = require('../../database/db.js');

//test: http://localhost:8080/payment/refill?id=100123456&amount=100

module.exports = (req, res, next) => {
    try {
        var id = req.query.id; 
        var amount = Number(req.query.amount)
        // make sure the user isnt trying to add a negative balance
        if(amount && amount > 0) {
            console.log(id);
            var db = new Database()
            // get the current values
            db.query(`SELECT balance, points FROM student_wallet WHERE student_id = ${id}`).then(
                rows => { 
                    if(rows){
                        let balance = rows[0].balance;
                        let points = rows[0].points;
                        // update the balance 
                        db.query(`UPDATE student_wallet SET balance = ${balance + amount} WHERE student_id = ${id}`).then(
                            rows => {
                                db.close();
                                res.json({success: true, balance: balance+amount, points: points, message:'funds added!'});
                            }
                        );
                    } else {
                        // error occured 
                        db.close();
                        res.json({success: false, message:'failed to add funds'});
                    }
                }
            );
        }
    } catch (e) {
        res.status(400).json({success: false, message:e});
        console.log(e)
    }
}