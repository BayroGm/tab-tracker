module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
      email: {
        type: DataTypes.STRING,
        unique: true
      },
      password: DataTypes.STRING
    });
  
    // Otras configuraciones del modelo si las necesitas
  
    return User;
  };
  