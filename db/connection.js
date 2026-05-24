const Sequelize = require('sequelize');

//criando instancias do Banco de Dados 
const sequelize = new Sequelize({
    dialect : 'sqlite',
    storage : './db/app.db'
})

module.exports = sequelize 
