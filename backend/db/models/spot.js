'use strict';
module.exports = (sequelize, DataTypes) => {
  const Spot = sequelize.define('Spot', {
    title: DataTypes.STRING,
    body: DataTypes.STRING,
    hostId: DataTypes.INTEGER,
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    address: DataTypes.TEXT,
    state: DataTypes.TEXT,
    zipCode: DataTypes.TEXT,
    photo1: DataTypes.STRING,
    photo2: DataTypes.STRING,
    photo3: DataTypes.STRING,
    photo4: DataTypes.STRING,
  }, {});
  Spot.associate = function(models) {
    // associations can be defined here
    Spot.belongsTo(models.User, { foreignKey: 'hostId' })
    Spot.hasMany(models.Review, { foreignKey: 'spotId' })
  };
  return Spot;
};
