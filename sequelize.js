//const {sequelize} = require("sequelize");
//import {userModel} from "./model/userss.js"
const Sequelize = require('sequelize');
       const connection =async ()=>{
      const sequelize = new Sequelize('postgres', 'postgres', 'Passw0rd', {
       host: 'localhost',
       dialect: 'postgres', 
});
//let userss=null;
try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
    //userss=userModel(sequelize);
    await sequelize.sync();
    console.log("connected to database");
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }

}
module.exports = Sequelize;
