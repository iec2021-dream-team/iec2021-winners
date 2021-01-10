// Connect to database and pay using the users reward point balance 
const Database = require("../../database/db")

function CalculatePoints(amount) {
    // every point is $5
    let points = amount*0.2
    return Math.round(points) 
}

http://localhost:8080/payment/pointpay?id=100123456&amount=100

module.exports = (req, res, next) => {
    try {
        let id = req.query.id;
        let amount = Number(req.query.amount);
        //let points = CalculatePoints(amount)

        // get the current 
        var db = new Database();
        db.query(`SELECT balance, points FROM student_wallet WHERE student_id = ${id}`).then( rows => {
            if(rows) {
                let points = Number(rows[0].points)
                let balance = rows[0].balance
                // check if they have enough
                if(points >= amount) {
                    // pay with the points and update sql
                    let new_points = points - amount
                    db.query(`UPDATE student_wallet SET points = ${new_points} WHERE student_id = ${id}`).then(rows => {
                        db.close();
                        res.json({success: true, balance: balance, points: new_points, points_earned: 0, message:'point purchase success!'})
                    });
                } else { // fail 
                    db.close();
                    res.json({success: false, required_points: amount-points, message:'insufficient points'})
                }
            }
        });
        
    } catch (er) {
        console.log(er);
    }

}