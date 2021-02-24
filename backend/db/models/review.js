'use strict';
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
    body: DataTypes.STRING,
    rating: DataTypes.INTEGER,
    authorId: DataTypes.INTEGER,
    spotId: DataTypes.INTEGER
  }, {});
  Review.associate = function(models) {
    // associations can be defined here
    Review.belongsTo(models.User, { foreignKey: 'authorId' })
    Review.belongsTo(models.Spot, { foreignKey: 'spotId' })
  };
  return Review;
};
