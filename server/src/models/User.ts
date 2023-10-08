import { Model, DataTypes } from 'sequelize';
import sequelize from '../connection/index.js';
import Post from './Post.js';

class User extends Model {
  password: any;
  username: any;
}

User.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  permissionId: DataTypes.INTEGER,
  username: DataTypes.STRING,
  password: DataTypes.STRING,
}, {
  createdAt: false,
  updatedAt: false,
  sequelize,
  modelName: 'User',
  tableName: 'user',
});

User.hasMany(Post, {
  foreignKey: 'userId',
  as: 'users'
})
Post.belongsTo(User, {
  foreignKey: 'userId',
  as: 'users'
})

export default User;
