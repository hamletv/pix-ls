'use strict';
module.exports = (sequelize, DataTypes) => {
  const Image = sequelize.define('Image', {
    userId: DataTypes.INTEGER,
    albumId: DataTypes.INTEGER,
    imageUrl: DataTypes.STRING,
    description: DataTypes.STRING
  }, {});
  Image.associate = function(models) {
    // associations
    Image.belongsTo(models.User, {
      as: 'users',
      foreignKey: 'userId'
    });

    Image.belongsTo(models.Album, {
      as: 'albums',
      foreignKey: 'albumId'
    });

    Image.hasMany(models.Comment, {
      as: 'comments',
      foreignKey: 'imageId'
    });
  };
  return Image;
};
