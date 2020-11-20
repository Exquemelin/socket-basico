var socket = io();

// Los "on" son para escuchar al servidor
// Conectamos el socket con el servidor y lanzamos un mensaje que ya está conectado
socket.on('connect', function() {
    console.log('Conectado al servidor');
});

// Cuando perdemos la conexión con el servidor podemos realizar funciones, como emitir un mensaje
socket.on('disconnect', function() {
    console.log('Se perdió la conexión con el servidor');
});

// Los "emit" son para enviar información al servidor
socket.emit('enviarMensaje', {
    usuario: 'Ivan',
    mensaje: 'Hola Mundo'
}, function(resp) {
    console.log('Respuesta server: ', resp);
});

// Escuchamos información
socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor: ', mensaje);
});