const sequelize = require("sequelize");

const connection = new sequelize ('grupo0', 'grupo0_vszf_user', 'z34EigsHXMsAe0YXihNAzSIqjQ4mnsbu', {
    host: 'dpg-ct5knejqf0us7387jc5g-a',
    port: '5432',
    dialect: 'postgres',
    dialectOptions: {
    ssl: {
      require: true, // Requer SSL para o Render
      rejectUnauthorized: false, // Aceita certificados não verificados
    },
  },
})

module.exports = connection;