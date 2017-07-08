var express = require('express'); // Web Framework
var app = express();
var sql = require('mssql'); // MS Sql Server client

// Connection string parameters.
var sqlConfig = {
    user: 'dynics\tmcclellan',
    password: 'P@ssw0rd1963',
    server: 'localhost\SQLEXPRESS01',
    database: 'ImageDB'
}

var connection = mssql.connect(sqlConfig, function (err) {
    if (err)
        throw err; 
});

app.get('/customers', function (req, res, next) {
    var request = new sql.Request();
    request.query('select * from DynicsImages', function (err, result) {
        if (err) 
            return next(err);

        var data = {};
        data["user"] = result.recordset;
        res.send(data);      
    }); 
}); 


// Start server and listen on http://localhost:8081/
var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port

    console.log("app listening at http://%s:%s", host, port)
});

