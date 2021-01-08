var het  = require('net');
var HOST = '127.0.0.1';
var PORT = 6969;

var client  = new het.Socket();
client.connect(PORT, HOST, function(){
    console.log('CONNECTED To: '+ HOST + ':' + PORT);
    client.write('I am thanin');

});

client.on('data', function(data){
    console.log('DATA: ' + data);

    client.destroy();
});

client.on('Close', function(){
    console.log('Connection closed');
});