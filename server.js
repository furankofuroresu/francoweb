// Importing express module
var express = require("express");
 
// Importing mongoose module
var mongoose = require("mongoose");
const port = 3000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// For serving static html files
app.use(express.static('public'));

// Starting the server on the 3000 port
app.listen(port, () => {
  console.log(`The application started
  successfully on port ${port}`);
});

// default URL for website
app.get('/', (req,res) => {
  return res.redirect("index.html");
  });

// Formulario de prueba
app.get("/form01", (req, res) => {
  return res.redirect("form.html");
});

app.post("/enviarForm", (req, res) => {
  let fjson = {
    name: req.body.name,
    sex: req.body.sex,
    accepted: req.body.agree
  }
  return res.render("form01result.ejs", {form_json: fjson});
});


