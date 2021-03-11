// Importamos las bibliotecas necesarias
var express = require('express'),
    bodyParser = require('body-parser'),
    cors = require('cors');

// Objeto global de la app
var app = express();

// Dot env
require('dotenv').config();

// Swagger
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

// https://swagger.io/specification/
const swaggerOptions = {
    swaggerDefinition: {
        info: {
            title: 'AdoptaPet API',
            description: 'Adopta una mascota',
            contact: {
                name: 'Jose Angel Gutierrez'
            },
            servers: ["http://localhost:3000"]
        }
    },
    // ['.routes/*js']
    apis: ['app.js']
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Swagger Routes
/**
 *  @swagger
 *  /v1/mascotas:
 *  get:
 *      description: Use to request all customers
 *      responses:
 *          '200':
 *              description: A successful response
 */

/**
 *  @swagger
 *  /v1/usuarios/:id:
 *  put:
 *      description: Use to update a customer
 *      responses:
 *          '200':
 *              description: A successful response
 */

/**
 *  @swagger
 *  /v1/usuarios:
 *  get:
 *      description: Use to request all users
 *      responses:
 *          '200':
 *              description: A successful response
 */


// configuración de middlewares
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/*********************** Mongoose Configuration *******************************/
const mongoose = require("mongoose");

mongoose.connect(
    process.env.MONGO_URI,
    { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }
).then(() => console.log('Database Connected Successfully')).catch((err) => console.error(err));

mongoose.set("debug", true);

//Modelos
require("./models/Usuario");

//Passport
require('./config/passport');

// Aquí se importarán los modelos Mascota y Solicitud cuando estén listos
/*********************** Mongoose Configuration *******************************/

// Agregamos el código de nuestro router (routes/index.js)
app.use('/v1', require('./routes'));

// Manejando los errores 404
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.statis = 404;
    next(err);
});

var server = app.listen(process.env.PORT || 3000, function () {
    console.log(`Escuchando en el puerto ${server.address().port}`);
});