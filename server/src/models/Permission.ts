import { Model, DataTypes } from 'sequelize';
import sequelize from '../connection/index.js';

class Permission extends Model {}

Permission.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  permissionName: DataTypes.STRING,
}, {
  createdAt: false,
  updatedAt: false,
  sequelize,
  modelName: 'Permission',
  tableName: 'permission',
});

export default Permission;
