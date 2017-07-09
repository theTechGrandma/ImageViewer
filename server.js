//Initiallising node modules
var express = require("express");
var bodyParser = require("body-parser");
var sql = require("mssql");
var app = express(); 

// Body Parser Middleware
app.use(bodyParser.json()); 

//CORS Middleware
app.use(function (req, res, next) {
    //Enabling CORS 
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, contentType,Content-Type, Accept, Authorization");
    next();
});

//Setting up server
 var server = app.listen(process.env.PORT || 8081, function () {
    var port = server.address().port;
    console.log("App now running on port", port);
 });

//Initiallising connection string
var dbConfig = {
    user: 'sa',
    password: 'P@ssw0rd1963',
    server: 'localhost\\SQLEXPRESS01',
    database: 'ImageDB',
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
            request.query(query, function (err, req) {
                if (err) {
                    console.log("Error while querying database :- " + err);
                    res.send(err);
                }
                else {
                    res.send(req);
                }
            });
        }
      });   
}

//GET API
// app.get("/api/images/:id", function(req , res){
//                 var query = "select * from [DynicsImages] WHERE ID= " + req.params.id;
//                 executeQuery (res, query);
// });

// app.get("/api/images", function(req , res){
//                 var query = "select * from [DynicsImages]";
//                 executeQuery (res, query);
// });

app.get("/api/images", function(req , res){
                var query = "select * from [TestTable]";
                executeQuery (res, query);
});

//POST API
 app.post("/api/images ", function(req , res){
                var query = "INSERT INTO [DynicsImages] (Image) VALUES (req.body.Image)";
                executeQuery (res, query);
});

//PUT API
 app.put("/api/image/:id", function(req , res){
                var query = "UPDATE [DynicsImages] SET Image= " + req.body.Image  +  " WHERE Id= " + req.params.id;
                executeQuery (res, query);
});

// DELETE API
 app.delete("/api/image /:id", function(req , res){
                var query = "DELETE FROM [DynicsImages] WHERE Id=" + req.params.id;
                executeQuery (res, query);
});