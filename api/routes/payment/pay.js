// TODO:
// database connect
// handle get request to pay
// determine if points or money
// return payment status and balances (json)

const Database = require("../../database/db")

function CalculatePoints(amount) {
    // every point is $5
    let points = amount*0.2
    return Math.round(points) 
}

http://localhost:8080/payment/pay?id=100123456&amount=100

module.exports = (req, res, next) => {
    try {
        let id = req.query.id;
        let amount = Number(req.query.amount);
        //let points = CalculatePoints(amount)

        // get the current 
        var db = new Database();
        db.query(`SELECT balance, points FROM student_wallet WHERE student_id = ${id}`).then( rows => {
            if(rows) {
                let balance = Number(rows[0].balance)
                let prev_points = Number(rows[0].points)
                if(balance >= amount) {
                    let new_balance = balance - amount;
                    let points = CalculatePoints(amount)
                    let new_points = prev_points + points
                    db.query(`UPDATE student_wallet SET balance = ${new_balance}, points = ${new_points} WHERE student_id = ${id}`).then(rows => {
                        db.close();
                        res.json({success: true, balance: new_balance, points: new_points, points_earned: points, message:'purchase success!'})
                    });
                } else {
                    db.close();
                    res.json({success: false, required_amount: amount-balance, message:'insufficient funds'})
                }
            }
        });
        
    } catch (er) {
        console.log(er);
    }

}