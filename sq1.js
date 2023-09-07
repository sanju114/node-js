const Sequelize = require ('sequelize');
const Sequelize = require('./sequelize');
const user= sequelize.define('users',{
    id:{
        type: Sequelize.INTEGER,
        autoIncrement : true,
        allowNull: false,
        primaryKey : true
    },
    name:{
        type: Sequelize.STRING,
        allowNull:false
    },
    imageUrl:{
        type : Sequelize.STRING,
        allowNull:false
    }
});

module.exports = user;