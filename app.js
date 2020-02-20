var express = require('express');
var app = express();

app.get('/', (req, res) => {

  if (req.query.name!=="") {
    res.send("<h1> Hola " + req.query.name +"!</h1>");
  }else{
    res.send("<h1> Hola Desconocido!</h1>");
  }
});


app.listen(3000, () => console.log('Listening on port 3000!'));
