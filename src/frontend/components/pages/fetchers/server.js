const express = require("express");
const cors = require("cors");
const mysql = require("mysql");
const bodyParser = require("body-parser");

const app = express();
app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "praktyka_lekarska"
})

db.connect(err =>{
    if(err){
        return err;
    }
})

console.log(db);

app.use(bodyParser.json())

app.get('/fetchers/fetchDiagList', (req, res) => {
    db.query('SELECT * FROM badania ORDER by id_badania', (error, results) => {
        if(error){
            console.error("Błąd zapytania: " + error);
            res.status(500).send("Błąd zapytania");
            return;
        }
        res.json(results);
    })
})

app.listen(4000, () => {
    console.log("Listening on port 4000")
})