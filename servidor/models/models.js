//modulo para crear el schema de los datos osea una tabla en mongo 
const mongoose = require("mongoose");
const {Schema} = mongoose;

//para definir el esquema de los datos que es nosql es la tabla de datos
//se definen los tipos de datos del schema 
const tareaSchema = new Schema({
    titulo: {type:String,required:true},
    descrip:{type:String,required:true}
});

//se crea el schema y se exporta
module.exports = mongoose.model("tarea",tareaSchema);




