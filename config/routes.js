var path = require("path")
module.exports.init = initRoutesConfig;

function initRoutesConfig (app) {

    app.use("/charts", require("../app/charts/chartsRoute"));
    app.use("/sales", require("../app/sales/salesRoute"));
    app.get("*", function (req, res) {
        res.sendFile(path.join(app.get("root") + "/public/index.html"));
    })
}
