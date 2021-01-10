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

http://localhost:8080/payment/balance?id=100123456&amount=100

module.exports = (req, res, next) => {
    try {
        let id = req.params.id
        let amount = Number(req.params.amount)
        let points = CalculatePoints(amount)

        // get the current 
        var db = new Database() 
        db.query(`SELECT balance FROM student_wallet WHERE id=${id}`).then( rows => {
            if(rows) {
               //todo check if balance is enough, take away, update the table, give points 
            }
        });
        
    } catch (er) {
        console.log(er);
    }

}