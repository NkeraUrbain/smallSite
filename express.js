var express = require('express');
var app = express();
const date= new Date()

const contactsRoutes = require("./routes/contact.js");
const servicesRoutes = require("./routes/contact.js");

app.use(contactsRoutes);
app.use(servicesRoutes);

// app.get('/p2', function(req, res) {
//   console.log(__dirname)
//   res.sendFile( __dirname+"/views/pageCent.html");
  
// });
// app.get('/p3', function(req, res) {
//   console.log(__dirname)
//   res.sendFile( __dirname+"/views/pagefin.html");
  
// });

// app.get('/',(req, res)=>{
// res.send(`${package.name}-v${package.version}`)
// });

// app.use(api_root, router)

app.listen(3000,()=>{  
});

console.log('salut les gars');

