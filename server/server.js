const express = require('express');
const socketIO = require('socket.io');
const http = require('http');

const path = require('path');

// creamos nuestra app de express y se la pasamos al socket.io para montar el servidor, que será el que estará escuchando
const app = express();
let server = http.createServer(app);

const publicPath = path.resolve(__dirname, '../public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

// IO = esta es la comunicación con el backend
module.exports.io = socketIO(server) // Con esto montamos el servidor
require('./sockets/socket');


server.listen(port, (err) => {

    if (err) throw new Error(err);

    console.log(`Servidor corriendo en puerto ${ port }`);

});