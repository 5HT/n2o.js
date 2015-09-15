var net = require('net');
    bert = require('./bert');
    client = require('./client');
    protocols = require('./protocols');
    util = require('util');

var clients = [];

net.createServer(function (socket) {
    socket.name = socket.remoteAddress + ":" + socket.remotePort;
    console.log('connection');
    clients.push(socket);
    socket.write("{io," + socket.name + ",[]}");
    broadcast(socket.name + " joined the chat\n", socket);
    socket.on('data', function (data) {
        console.log(data);
        broadcast(socket.name + "> " + data, socket);
    });
    socket.on('end', function () {
        clients.splice(clients.indexOf(socket), 1);
        broadcast(socket.name + " left the chat.\n");
    });
    function broadcast(message, sender) {
        clients.forEach(function (client) {
        if (client === sender) return;
        client.write(message);
    });
    process.stdout.write(message)
    }
}).listen(5000);
