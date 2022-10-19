const express = require("express")
const cors = require("cors")
const sqlite3 = require("sqlite3")
const path = require("path");
const app = express()
const port = 7500
const dbname = "univers.db"

app.use(cors())

let db = new sqlite3.Database(dbname, err => {
  if (err)
    throw err
  console.log(`La base de données est initialisée dans le fichier: ${dbname}`)
})

app.listen(port, () => {
    console.log("Serveur démarré (http://localhost:7500/) !");
});

//ejs template
app.set("view engine", "ejs");

app.set("views", __dirname + "/views");
app.use(express.static(path.join(__dirname, "public")));


app.get('/', (req, res) => {
    res.render("index");
})

app.get('/planetes', (req, res) => {
 // res.header("Content-type", "application/json")
  db.all("SELECT * FROM planetes", (err, data) => {
    if (err) throw err
    //res.send(JSON.stringify(data))
    res.render("planetes", { model: data });
  })
})

app.get('/planete/:id', (req, res) => {
 //  res.header("Content-type", "application/json")
   db.get(`SELECT * FROM planetes WHERE id = ${req.params.id}`, (err, data) => {
     if (err) throw err
     res.render("planete", { model: data });
   })
})