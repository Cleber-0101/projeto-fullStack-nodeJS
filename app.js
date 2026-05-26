const express = require('express');
const app = express();
// Puxando as informações do banco de dados 
const db = require('./db/connection');
const router = express.Router();

const PORTA = 8000

app.use((req, res, next) => {
    console.log('REQ', req.method, req.url, req.headers['content-type']);
    next();
});

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//rota teste
router.get('/teste' , (req,res ) => {
    res.send("Deu certo")
})

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

app.use('/jobs', require('./routes/jobs'))
app.use(router);