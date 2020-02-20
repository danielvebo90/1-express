var express = require('express');
var app = express();

app.get('/', (req, res) => {
  res.send("<h1> Hola " + req.query.name +"! </h1>");
});


app.listen(3000, () => console.log('Listening on port 3000!'));
