module.exports = (sequelize,DataType) => {
    var User = sequelize.define('User', {
        Name: DataTypes.STRING,
        Email: DataTypes.STRING,
        Password: DataTypes.STRING
    });
    return User;
}