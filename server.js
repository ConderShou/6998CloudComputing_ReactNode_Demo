var express = require('express');
var app = express();
var fs = require("fs");
var url = require('url');
var http = require('http');
var uniqid = require('uniq-id')
var cors = require('cors');
var bodyParser = require('body-parser');

// the post htttp request url to hit the below function
// http://localhost:8081/addPerson/?lastName=Gupta&firstName=Kilol&dd=14&mm=08&year=1993&email=kilol.gupta@columbia.edu

//Access-Control-Allow-Origin
app.use(cors());
app.use(bodyParser.urlencoded({
   extended : false
}));
app.use(bodyParser.json());

app.post('/addPerson', function (req, res) {
    console.log("reqbody: ", req.body);
    // var q = url.parse(req.url, true).query;
    var q = req.body;
    var personId = uniqid();
    var lastName = q.lastName;
    var firstName = q.firstName;
    var dd = q.dd;
    var mm = q.mm;
    var year = q.year;
    var email = q.email;
    var countryCode = q.countryCode;
    var phone = q.phone;

    // create the new person's details according the format in which data is stored in db
    var newPerson = {
        "user4" : {
            "personId" : personId,
            "firstName" : firstName,
            "lastName" : lastName,
            "dd" : dd,
            "mm" : mm,
            "year" : year,
            "email" : email,
            "countryCode" : countryCode,
            "phone" : phone
        }
    }

    // Add the newPerson to the database
    fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
        data = JSON.parse( data );
        data["user4"] = newPerson["user4"];
        console.log( data );
        res.end( JSON.stringify(data));
    });

})

app.get('/listPersons', function (req, res) {
    fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
        console.log( data );
        res.end( data );
    });
})

app.delete('/deletePerson', function (req, res) {

    var q = req.body;
    var personId = q.personId

    // delete the person entry in database with 'personId' as the matching personId
    fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
        data = JSON.parse( data );
        delete data["user" + "eebb946e69fe8bbd251b"];

        console.log( data );
        res.end( JSON.stringify(data));
    });
})

app.put('updatePerson', function (req, res) {

    var q = req.body;
    var personId = q.personId;
    var lastName = q.lastName;
    var firstName = q.firstName;
    var dd = q.dd;
    var mm = q.mm;
    var year = q.year;
    var email = q.email;
    var countryCode = q.countryCode;
    var phone = q.phone;

    // update the above entry in the database based on the personId field

})




var server = app.listen(8081, function () {

    var host = server.address().address
    var port = server.address().port

    console.log("Example app listening at http://%s:%s", host, port)

})