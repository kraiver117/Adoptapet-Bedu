const Solicitud = require('../models/Solicitud');

function crearSolicitud(req, res) {

    var solicitud = new Solicitud(req.body);
    res.status(201).send(solicitud);
}

function obtenerSolicitudes(req, res) {
    var solicitud1 = new Solicitud(1, 1, new Date(), 1, 1, "Pendiente");
    var solicitud2 = new Solicitud(2, 2, new Date(), 2, 2, "Aceptada");
    res.send([solicitud1, solicitud2]);
}


function modificarSolicitud(req, res) {
    var solicitud1 = new Solicitud(Number(req.params.id), 1, new Date(), 1, 1, "Pendiente");
    var modificaciones = req.body
    solicitud1 = { ...solicitud1, ...modificaciones }
    res.send(solicitud1);
}

function eliminarSolicitud(req, res) {
    res.status(200).send(`Solicitud ${req.params.id} eliminada`);
}

// exportamos las funciones definidas
module.exports = {
    crearSolicitud,
    obtenerSolicitudes,
    modificarSolicitud,
    eliminarSolicitud
}