const { io } = require('../server');


io.on('connection', (client) => {

    console.log('Usuario conectado');

    client.emit('enviarMensaje', {
        usuario: 'Administrador',
        mensaje: 'Bienvenido a esta aplicación'
    });

    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    });

    // Escuchar al cliente
    client.on('enviarMensaje', (data, callback) => {

        console.log(data);

        // Si solo usamos el "emit", el mensaje lo recibirá quién lo envia. Con "broadcast" lo enviaremos a todos.
        client.broadcast.emit('enviarMensaje', data);

        // if (mensaje.usuario) {
        //     callback({
        //         resp: 'TODO SALIÓ BIEN'
        //     }); // Esta función viene del cliente y se la devolvemos
        // } else {
        //     callback({
        //         resp: 'TODO SALIÓ MAL!!!!!!!!!'
        //     });
        // };

    });

});