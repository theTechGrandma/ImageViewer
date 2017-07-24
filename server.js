var express = require('express'); // Web Framework
var bodyParser = require('body-parser');
var sql = require('mssql'); // MS Sql Server client
var app = express();

app.use(bodyParser.json({ type: 'application/json' }));

var router = express.Router();
app.use("/api/images", router)

//CORS Middleware
app.use(function (req, res, next) {
    //Enabling CORS 
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, contentType,Content-Type, Accept, Authorization");
    next();
});

var server = app.listen(process.env.PORT || 8080, function () {
    var port = server.address().port;
    console.log("App now running on port", port);
 });

// Connection string parameters.
var dbConfig = {
    user: 'sa',
    password: 'P@ssw0rd1963',
    server: 'localhost\\SQLEXPRESS01',
    database: 'ImageDB'
};

//Function to connect to database and execute query
var  executeQuery = function(res, query){   
    sql.connect(dbConfig, function (err) {
        if (err) {   
            console.log("Error while connecting database :- " + err);
            res.send(err);
        }
         else {
            // create Request object
            var request = new sql.Request();
            // query to the database
            request.query(query, function (err, rs) {
            if (err) {
                console.log("Error while querying database :- " + err);
                res.send(err);
            }
            else {
                res.send(rs);
            }
        });
        }
    });  
}

//GET API
router.get("/:id", function(req , res){
                var query = "select * from [TestTable] where id = " + req.query.id;
                executeQuery (res, query);
});

router.get("/", function(req , res){
                var query = "select * from [TestTable]";
                executeQuery (res, query);
                console.log(req.query.id);
});

module.export = router;