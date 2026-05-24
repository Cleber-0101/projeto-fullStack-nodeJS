const express = require('express');
const app = express();

const PORTA = 3000

//escutando 
app.listen(PORTA, function(){
    console.log(`Estou entrando ${PORTA}`)
});

//criando rota
app.get('/', (req, res) =>{
    res.send("Esta funcionando REST")
});

