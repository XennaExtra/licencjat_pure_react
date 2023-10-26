const express = require("express");
const cors = require("cors");
const mysql = require("mysql");

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

app.listen(4000, () => {
    console.log("Listening on port 4000")
})