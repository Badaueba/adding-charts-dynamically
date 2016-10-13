var Sales = require('./salesModel');
module.exports.add = addSale;
module.exports.list = listSales;
module.exports.group = groupSales;

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
    var criteria = {};
    var sort = '';
    if (req.query.category) criteria.category = req.query.category;
    if (req.query.theme) criteria.theme = req.query.theme;
    if (req.query.sort) sort = req.query.sort;
    var query = Sales.find(criteria);
    query.sort(sort);
    query.exec((err, sales) => {
        if (err) {
            console.log(err);
            return res.send(err.message);
        }
        res.json(sales);
    });
}

function groupSales (req, res) {
    var groupid = "$" + req.query.groupid;

    var query = Sales.aggregate([

        {
            $group : {
                _id : groupid,
                total : {$sum : 1}
            }
        }
    ]);

    query.exec( (err, result) => {
        if (err) {
            console.log(err);
            res.send(err.message);
        }
        res.json(result);
    })
}
