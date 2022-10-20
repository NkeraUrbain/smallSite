var express = require('express');
var app = express();
const date= new Date()

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function(req, res) {
  console.log(__dirname)
  res.sendFile( __dirname+"/smallSite/accueil.html");
});
app.get('/p2', function(req, res) {
  console.log(__dirname)
  res.sendFile( __dirname+"/smallSite/pageCent.html");
  
});
app.get('/p3', function(req, res) {
  console.log(__dirname)
  res.sendFile( __dirname+"/smallSite/pagefin.html");
  
});


app.listen(3000,()=>{  
});

console.log('salut les gars');

