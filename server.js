var express = require("express");
var app = express();
var getIP = require('ipware')().get_ip;

app.get('/', function(req, res){
  var userObj = {};
  userObj['ipaddress'] = getIP(req).clientIp;
   res.send(userObj); 
});

app.listen(process.env.PORT, function () {
  console.log('Node.js listening ...');
});
