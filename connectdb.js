const Sequelize = require("sequelize");

const sequelize = new Sequelize("sanjyot", "postgres", "Passw0rd", {
  host: "localhost",
  dialect: "postgres"
});

module.exports = sequelize;
