const Sequelize = require('sequelize')
const db = require('../db/connection')

// define usado para criar tabela no banco de dados
const Job = db.define('job', {
    titulo: {
        type: Sequelize.STRING,
    },
    descricao: {
        type: Sequelize.STRING,
    },
    salario: {
        type: Sequelize.STRING,
    },
    compania: {
        type: Sequelize.STRING,
    },
    email: {
        type: Sequelize.STRING,
    },
    novo_trabalho: {
        type: Sequelize.INTEGER
    }
})

module.exports = Job