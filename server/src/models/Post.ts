import { Model, DataTypes } from 'sequelize';
import sequelize from '../connection/index.js';
import User from './User.js';

class Post extends Model {
  userId: any;

}

Post.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  userId: DataTypes.INTEGER,
  realm: DataTypes.STRING,
  title: DataTypes.STRING,
  description: DataTypes.STRING,
  image: DataTypes.STRING,
  published: {
    type: DataTypes.TIME,
  },
  readTime: DataTypes.INTEGER,
}, {
  createdAt: false,
  updatedAt: false,
  sequelize,
  modelName: 'Post',
  tableName: 'post',
});

export default Post;
