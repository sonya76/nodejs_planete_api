const sqlite3 = require("sqlite3")
const dbname = "univers.db"

let db = new sqlite3.Database(dbname, err => {
    if (err)
        throw err
    console.log(`Base de données est initialisée dans le fichier: ${dbname}`)
})

db.run('CREATE TABLE IF NOT EXISTS planetes (id INTEGER PRIMARY KEY, nom varchar(25), image varchar(255), created_at DATETIME DEFAULT CURRENT_TIMESTAMP')
db.run("Insert into PLANETES (nom, image) values (?, ?)", ["Mars", "https://upload.wikimedia.org/wikipedia/commons/3/36/Mars_Valles_Marineris_EDIT.jpg"])
db.run("Insert into PLANETES (nom, image) values (?, ?)", ["Terre", "https://upload.wikimedia.org/wikipedia/commons/d/d9/Earth_by_the_EPIC_Team_on_21_April_2018.png"])
db.run("Insert into PLANETES (nom, image) values (?, ?)", ["Mercure", "https://upload.wikimedia.org/wikipedia/commons/3/30/Mercury_in_color_-_Prockter07_centered.jpg"])
db.run("Insert into PLANETES (nom, image) values (?, ?)", ["Venus", "https://upload.wikimedia.org/wikipedia/commons/e/e5/Venus-real_color.jpg"])