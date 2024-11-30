const express = require('express');
const connection = require('./database/db');
const bodyParser = require('body-parser');
const ReportsController = require("./Reports/ReportsController");
const Report = require("./Reports/Report");


const app = express();


//config view engine e arquivos estáticos
app.set("view engine", "ejs");
app.use(express.static("public"));

//configuração das sessões


//config bodyParser
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

connection.authenticate().then(()=>{
    console.log("Database acessed")
}).catch((err)=>{
    console.log("err: " + err);
})
//autenticando o banco de dados

app.use("/", ReportsController);

//quer dizer que app está usando as rotas que estão dentro de categoriesController e ReportsController

app.get('/', (req,res)=>{
    Report.findAll({
        order: [
            ['id', 'DESC']
        ],
        limit:10
    }).then(Reports=>{
        res.render("index", {Reports:Reports})
        
    })
    
})

app.listen(8080, ()=>{
    console.log("Server running!")
})