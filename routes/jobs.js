
//Rotas para Jobs, criando rota que aciona as rotas de trabalho 
const express = require('express');
const router  = express.Router();
const job     = require('../models/Job')

// adicionando job via post
router.post('/add',  (req, res) =>{
    let {titulo, salario, compania, descricao, email, novo_trabalho} = req.body;

    job.create({
        titulo,
        descricao,
        salario,
        compania,
        email,
        novo_trabalho
    })
    .then(() => res.redirect('/'))
    .catch(err => console.log(err));
})

module.exports = router

