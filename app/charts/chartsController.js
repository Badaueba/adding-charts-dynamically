module.exports.add = addChart;
module.exports.list = listCharts;

function addChart (req, res) {
    res.send("new chart added");
}

function listCharts (req, res) {
    res.send("list of charts");
}
