//modulo de conexion a la base de datos 
const mongoose = require("mongoose");

//creacion de la base de datos 
const URL = 'mongodb://localhost/mern-tareas';

//conexion de la base datods  mern-tareas
mongoose.connect(URL)
    //verificacion de conexion de la base de datos 
    .then(db => console.log("base de datos conectada..."))
    .catch(err => console.error(err));

//exportacion de modulo para poder usar en otro archivo
module.exports = mongoose;
 
