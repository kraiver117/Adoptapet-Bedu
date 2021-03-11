// Mascota.js
/** Clase que representa un animalito a adoptar */
class Mascota {
    constructor(id, nombre, categoria, descripcion, fotos, anunciante, ubicacion) {
        this.id = id;
        this.nombre = nombre; // nombre de la mascota (o titulo del anuncio)
        this.categoria = categoria; // perro | gato | otro
        this.descripcion = descripcion; // descripción del anuncio
        this.fotos = fotos; // links a las fot
        this.anunciante = anunciante; // contacto con la persona que anuncia al animalito
        this.ubicacion = ubicacion; // muy importante
    }
}

module.exports = Mascota;