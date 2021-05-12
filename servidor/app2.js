const express = require('express');
const path = require('path');
const logger = require('morgan'); 
//para provemas de cors instalar npm install --save cors
//https://es.stackoverflow.com/questions/218426/falta-la-cabecera-cors-access-control-allow-origin
const cors = require('cors');

//rutas de la aplicacion 
var RutasRouter = require('./routes/rutas');

//objeto app de express
const app = express();

//puesto de inico del servidor
app.set('port',process.env.PORT || 3001);

//middlewares basicos que se inican antes de lleguen la rutas 
app.use(logger('dev'));
app.use(express.json());
//middleware para problema con cors 
app.use( cors({ origin: true, credentials: true  }) );

//ruta de archivos estaticos
//ruta donde se encuentran los archivos estaticos del 
//frony-end en este caso las creadas con react pero pueden usarse las handerbears o pug
//console.log(path.join(__dirname, 'cliente/public')); //para ubicar la ruta de archivos publicos
app.use(express.static(path.join(__dirname, 'cliente/public'))); 
//app.use(express.static(path.join(__dirname, 'cliente/build'))); 
 
//uso de la ruta inicial del proyecto  
app.use('/', RutasRouter);


// custom 404 page
app.use(function(req, res){
    res.type('text/plain');
    res.status(404);
    res.send('404 - No encuentra ese recurso...');
});

// custom 500 page
app.use(function(err, req, res, next){
    console.error(err.stack);
    res.type('text/plain');
    res.status(500);
    res.send('500 - Server Error');
});


app.listen(app.get('port'), function(){
    console.log( 'Express started on http://localhost:' +
    app.get('port') + '; press Ctrl-C to terminate.' );
});


//recordar instalar nodemon para poder actualizar el servidor automticamente 