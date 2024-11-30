const { DataTypes } = require('sequelize');
const {sequelize} = require('../config/dbConfig');
// const TaskModel = require('../model/taskModel');



const favMovie = sequelize.define(
    'favorite_movie',
    {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        imgUrl: {
            type: DataTypes.STRING,

        },
        type:{
            type: DataTypes.STRING,
        },
        releaseDate:{
            type: DataTypes.STRING,
        },

    },

    { timestamps: true },
);


module.exports = favMovie;