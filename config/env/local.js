module.exports = {
    port : process.env.PORT || 8000,
    hostname : process.env.IP || 'localhost',
    mongodb : {
        uri : 'mongodb://localhost:27017/dynamic-chart'
    },
    app : {
        name : 'Dynamic Chart'
    }
};
