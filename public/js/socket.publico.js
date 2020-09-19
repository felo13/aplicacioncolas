var socket = io();
var lblE1 = $('#lblEscritorio' + 1);
var lblE2 = $('#lblEscritorio' + 2);
var lblE3 = $('#lblEscritorio' + 3);
var lblE4 = $('#lblEscritorio' + 4);
var lblT1 = $('#lblTicket' + 1);
var lblT2 = $('#lblTicket' + 2);
var lblT3 = $('#lblTicket' + 3);
var lblT4 = $('#lblTicket' + 4);

var labelEsc = [lblE1, lblE2, lblE3, lblE4];
var labelAtend = [lblT1, lblT2, lblT3, lblT4];

socket.on('connect', function() {
    console.log('Conectado a Servidor');
});

socket.on('disconnect', function() {
    console.log('Perdimos conexión con Servidor');
});

socket.on('estadoActual', function(data) {
    actualizarHTML(data.ultimos4);
});

socket.on('ultimos4', function(data) {
    var audio = new Audio('audio/new-ticket.mp3');
    audio.play();
    actualizarHTML(data.ultimos4);
});

function actualizarHTML(ultimos4) {
    for (let index = 0; index < ultimos4.length; index++) {
        labelEsc[index].text('Escritorio ' + ultimos4[index].escritorio);
        labelAtend[index].text('Ticket ' + ultimos4[index].numero);
    }
}