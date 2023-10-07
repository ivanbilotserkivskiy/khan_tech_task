import { Model, DataTypes } from 'sequelize';
import sequelize from '../connection/index.js';

class User extends Model {}

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

export default User;
