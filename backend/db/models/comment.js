'use strict';
module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', {
    userId: DataTypes.INTEGER,
    imageId: DataTypes.INTEGER,
    comment: DataTypes.STRING
  }, {});
  Comment.associate = function(models) {
    // associations
    Comment.belongsTo(models.User, {
      // as: 'users',
      foreignKey: 'userId'
    });

    Comment.belongsTo(models.Image, {
      // as: 'comments',
      foreignKey: 'imageId'
    });
  };
  return Comment;
};
