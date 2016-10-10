module.exports.add = addSale;
module.exports.list = listSales;
function addSale (req, res) {
    res.send("new sale added.")
}
function listSales (req, res) {
    res.send("list of sales");
}
