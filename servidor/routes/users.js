var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  //res.send('respond with a resource');
  
  console.log("dentro de usariarios");

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
    }
  ])
});

module.exports = router;
