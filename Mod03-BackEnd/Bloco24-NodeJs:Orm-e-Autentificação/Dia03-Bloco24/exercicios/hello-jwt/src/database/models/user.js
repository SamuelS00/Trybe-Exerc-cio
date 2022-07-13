module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        username: DataTypes.STRING,
    }, {
        underscored: true,
        tableName: 'Users'
    })
    return User;
};