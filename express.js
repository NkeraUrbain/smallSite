var express = require('express');
var app = express();
const date= new Date()

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function(req, res) {
  console.log(__dirname)
  res.sendFile( __dirname+"/accueil.html");
});
app.get('/p2', function(req, res) {
  console.log(__dirname)
  res.sendFile( __dirname+"/pageCent.html");
  
});
app.get('/p3', function(req, res) {
  console.log(__dirname)
  res.sendFile( __dirname+"/pagefin.html");
  
});


app.listen(3000,()=>{  
});

console.log('salut les gars');

