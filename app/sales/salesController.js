var Sales = require('./salesModel');
module.exports.add = addSale;
module.exports.list = listSales;

function addSale (req, res) {
    var newSale = new Sales(req.body);
    newSale.save((err) => {
        if (err) {
            console.log(err);
            return res.send(err.message);
        }
        res.send({
            success : true,
            message : "New Sale saved."
        });
    });
}
function listSales (req, res) {
    var query = Sales.find();
    query.exec((err, sales) => {
        if (err) {
            console.log(err);
            return res.send(err.message);
        }
        res.json(sales);
    });
}
