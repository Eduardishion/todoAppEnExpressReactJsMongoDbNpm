const express = require('express');
const router = express.Router();

//conexion a la base de datos 
const {mongoose} = require("../models/conecDatabase");
//inicializacion de schema o tabla para ser usada 
const tareaSchema = require("../models/models");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.type('text/plain');
  res.send('ruta inicial...');
}); 
/*
router.get('/api/tareas', function(req, res, next) {
  res.type('text/plain');
  //res.send('has entrado a la API..');
  //hacer una consulta basica hacia la base de datos 
  
  consulta basica de schema o tabla 
  tareaSchema.find(function(err ,tareaSchema){
    console.log(tareaSchema);
  });
*/

//operaciones CRUD donde se 
//inserta, elimina, actualiza y consultar

//consultar a la base de datos de todos los registros
router.get('/api/tareas', async (req, res) =>{
   // se hace una consulta a la base de datos y se almacena en un objeto 
   const registrostareaSchema = await tareaSchema.find();  
  //cmostramos los registros de la base de datos por consola 
   
   //console.log(registrostareaSchema);
   //res.json({recivido});
   //res.json("recivido...");
   //y mostramos los registros por medio del objeto para nuestra API
   res.json(registrostareaSchema);
});  

//consultar a la base de datos de un solo registro 
router.get('/api/tareas/:id', async (req, res) =>{
   //consulta de la base datos de un solo registro por identificador
   const registrotareaSchemTMP = await tareaSchema.findById(req.params.id);
   res.json(registrotareaSchemTMP);

});  

//inserta en la base datos 
router.post('/api/tareas', async (req, res) =>{
  //leyendo la peticon post 
  
  //capturar la los datos en trantes de la peticion post
  const {titulo,descrip} =  req.body;  
  //creamos un obejto temporal que guarda los datos de entrada 
  const registrotareaSchemTMP = new tareaSchema({titulo,descrip});
  //insertamos el objeto a la schema o tabla de la base datos 
  
  //console.log(registrotareaSchemTMP);
  await registrotareaSchemTMP.save();
  //mostramos por consolo lo que se inseeto cd 
  //mandamos mensaje de recivido 
  res.json({status:"tarea guardada..."});
  
}); 

//actualizacion a la base de datos 
router.put('/api/tareas/:id', async (req,res) => {
    //obtencion de los datos del body y almacenados en un registro temporal 
    const {titulo,descrip} =  req.body; 
    //se crea el registro temporal 
    const registrotareaSchemTMP = {titulo,descrip}; 
    //para saber el id y mostrarlo por consola
    //console.log(req.params.id);
    
    //actualizacion de registro por id mendiante el objeto tareaSchema 
    await tareaSchema.findByIdAndUpdate(req.params.id,registrotareaSchemTMP);
    res.json({status:"tarea actualizada..."});
});

//eliminacion de la base de datos 
router.delete('/api/tareas/:id', async (req,res) =>{
  //consulta a la base datos y eliminar 
  await tareaSchema.findByIdAndRemove(req.params.id);
  res.json({status:"tarea eliminada..."});
});

router.get('/users', function(req, res, next) {
  //res.send('respond with a resource');
  
  res.json([{
    id:1,
    username:"lalo",
    }, {
    id:2,
    username:"luis"
    }
    ,{
    id:3,
    username:"DFD"
    },{
    id:4,
    username:"DsdfsdD"
    },{
    id:5,
    username:"Sandi te amo "
    }
  ])
});


module.exports = router;
