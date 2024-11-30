const sequelize = require("sequelize");
const connection = require("../database/db");

const Report = connection.define("Reports", {
    title:{
        type: sequelize.STRING,
        allowNull:false
    },
    slug:{
        type: sequelize.STRING,
        allowNull:false
    },
    body:{
        type: sequelize.TEXT,
        allowNull:false
    },
    location:{
        type: sequelize.STRING,
        allowNull:false
    }
    
})

Report.sync({force:false});

module.exports = Report;