const sqlite3 = require('sqlite3').verbose();

// open the database
const dbname = 'univers.db';
let db = new sqlite3.Database(dbname, err => {
    if (err)
        throw err
    console.log("Base de donnée initialisé dans le fichier : " + dbname);
});

// GET Liste les planètes
app.get('/planetes', (req, res) => {
   // res.header("Content-type", "application/json")
    db.all("SELECT * FROM planetes", (err, data) => {
      if (err) throw err
      res.render("planetes", { model: data });
      //res.send(JSON.stringify(data))
    })
  })

app.get('/planete/:id', (req, res) => {
  //  res.header("Content-type", "application/json")
    db.get(`SELECT * FROM planetes WHERE id = ${req.params.id}`, (err, data) => {
      if (err) throw err
      res.render("planetes", { model: data });
    })
})

// close the database connection
db.close();