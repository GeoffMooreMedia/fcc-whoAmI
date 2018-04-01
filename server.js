var express = require("express");
var app = express();
var getIP = require('ipware')().get_ip;

app.get('/', function(req, res){
  var userObj = {};
  var userAgent = req.get('User-Agent').split('(')[1];
  userObj['ipaddress'] = getIP(req).clientIp;
  userObj['language'] = req.headers['accept-language'];
  userObj['software'] = userAgent.split(')')[0];
   res.send(userObj); 
});

app.listen(process.env.PORT, function () {
  console.log('Node.js listening ...');
});
