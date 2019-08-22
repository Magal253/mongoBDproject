var mongoose = require('mongoose');

/*
module.exports = (mongoose,DataTypes) => {
    var smth = new mongoose.Schema({
        Name: String,
        idad: Number,

    })
*/
var algumSchema = new mongoose.Schema({
    name: String,
    age: Number,
    dirige: Boolean,
    familia: []
});
/*
var User = sequelize.define('User', {
    Name: DataTypes.STRING,
    Email: DataTypes.STRING,
    Password: DataTypes.STRING
});
*/
return algumSchema;
