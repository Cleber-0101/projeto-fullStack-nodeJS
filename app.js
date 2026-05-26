const express = require('express');
const app = express();
// Puxando as informações do banco de dados 
const db = require('./db/connection');

const bodyParser = require('body-Parser')

const PORTA = 3000

//escutando 
app.listen(PORTA, function () {
    console.log(`Estou entrando ${PORTA}`)
});

//db criando conexão do banco, toda e qualquer conexão consernente a Banco vai passar por aqui
db
    .authenticate()
    .then(() => {
        console.log("Conectou ao banco do sucesso")
    })
    .catch(err => {
        console.log("Ocorreu um erro a se conectar", err)
    })

//Routes
app.get('/', (req, res) => {
    res.send("Esta funcionando REST")
});

