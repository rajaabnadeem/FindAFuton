'use strict';
module.exports = (sequelize, DataTypes) => {
  const Spot = sequelize.define('Spot', {
    title: DataTypes.STRING,
    body: DataTypes.STRING,
    hostId: DataTypes.INTEGER
  }, {});
  Spot.associate = function(models) {
    // associations can be defined here
    Spot.belongsTo(models.User, { foreignKey: 'hostId' })
    Spot.hasMany(models.Review, { foreignKey: 'spotId' })
  };
  return Spot;
};
