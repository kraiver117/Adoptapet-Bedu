// importamos el modelo de usuarios
const Mascota = require('../models/Mascota');

function crearMascota(req, res) {
    // Instanciaremos un nuevo usuario utilizando la clase usuario
    var mascota = new Mascota(req.body);
    res.status(201).send(mascota);
}

function obtenerMascotas(req, res) {
    // Simulando dos mascotas y respondiendolos
    var mascota1 = new Mascota(1, 'Dogge', 'Perro', 'Adoptame :D', 'Noble y jugueton');
    var mascota2 = new Mascota(2, 'Kitty', 'Gato', 'Adoptame', 'Noble, jugueton y tierno');
    res.send([mascota1, mascota2]);
}


function modificarMascota(req, res) {
    // simulando un mascota previamente existente que el cliente modifica
    var mascota1 = new Mascota(req.params.id, 'Dogge', 'Perro', 'Noble y jugueton');
    var modificaciones = req.body;
    mascota1 = { ...mascota1, ...modificaciones };
    res.send(mascota1);
}

function eliminarMascota(req, res) {
    // se simula una eliminación de usuario, regresando un 200
    res.status(200).send(`Mascota ${req.params.id} eliminado`);
}

// exportamos las funciones definidas
module.exports = {
    crearMascota,
    obtenerMascotas,
    modificarMascota,
    eliminarMascota
};