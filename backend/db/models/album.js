'use strict';
module.exports = (sequelize, DataTypes) => {
  const Album = sequelize.define('Album', {
    userId: DataTypes.INTEGER,
    title: DataTypes.STRING
  }, {});
  Album.associate = function(models) {
    // associations
    Album.belongsTo(models.User, {
      as: 'users',
      foreignKey: 'userId'
    });

    Album.hasMany(models.Image, {
      as: 'images',
      foreignKey: 'albumId'
    });
  };
  return Album;
};
