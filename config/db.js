
const Sequelize = require('sequelize');
const sequelize = new Sequelize('postgres://default:a0DrVe3itGbX@ep-proud-fire-a4na9tmh.us-east-1.aws.neon.tech:5432/verceldb?sslmode=require', { dialect: 'postgres' });

(async () => {
    Sequelize.async({ force: true })
})

module.exports = { sequelize };