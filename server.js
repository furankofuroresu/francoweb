// Importing express module
var express = require("express");
const mysql = require('mysql')

 
// Importing mongoose module
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

//Get game form
app.get("/gameform", (req, res) => {
  return res.render("gameform.ejs")
});

//Add game
app.post("/gameform", (req, res) => {
  let game = new Game(req.body.gameName, req.body.categories, req.body.multiplayer)
  addGame(game);
  return res.render("gameform.ejs", {game: game});
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


const connection = mysql.createConnection({
  host: 'localhost',
  port: "3306",
  user: 'root',
  password: 'mysql',
  database: 'francoweb'
})

function connectToDB() {
    connection.connect();
    console.log("Estamos conectados");
}

function disconnect(){
    connection.end()
}

/**
 * 
 * @param {Game} game 
 */
function addGame(game){
    connectToDB();
    let queryStr = 'INSERT INTO francoweb.GAMES(name, temp_category, multiplayer) VALUES("' + game.name +'","' + game.category + '", "' + game.multiplayer + '")';
    console.log("query > " + queryStr);
    connection.query(queryStr, (err, rows) => {
        if (err) throw err
      
        console.log('The solution is: ', rows[0].solution)
      });
      console.log("Ok eso paso? " + JSON.stringify(game));
      disconnect();
}

class Game {
    constructor(name, category, multiplayer){
        this.name = name;
        this.category = category;
        this.multiplayer = multiplayer;
    }
}