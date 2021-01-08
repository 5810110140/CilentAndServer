var dgram = require("dgram");

var server = dgram.createSocket("udp4");

server.on("Message",function(msg, rinfo){
    console.log("server got: " + msg + "from " + rinfo.address + ":" + rinfo.port);
});
server.bind(41234);

var dgram = require('dgram');
var message = new Buffer("Some bytes");
var client = dgram.createSocket("ubp4");
client.send(message, 0 , message.lenght, 41234, "localhost",function(err,bytes){
    client.close();
});