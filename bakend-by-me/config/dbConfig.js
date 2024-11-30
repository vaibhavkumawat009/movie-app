const { Sequelize } = require('sequelize');


const sequelize = new Sequelize('Favorite', 'root', '1506', {
    host: 'localhost',
    dialect: 'mysql'
});

exports.connectDb = async()=>{
    try {
        await sequelize.sync({ force: false });
        await sequelize.authenticate();
        console.log('Connected To Db');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}
//


exports.sequelize = sequelize;