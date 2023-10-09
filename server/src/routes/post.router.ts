import express from 'express'
import { addPost, addPreparedPoste, getPostCount, getPosts, removePost, updatePost } from '../controllers/post.controller.js'
import fileUpload from 'express-fileupload'

const postRouter = express.Router()

postRouter.post('/prepared', addPreparedPoste)

postRouter.get('/count', getPostCount)

postRouter.get('/', getPosts)


postRouter.post('/', fileUpload({ createParentPath: true }), addPost)

postRouter.delete('/:id', removePost)

postRouter.put('/:id', fileUpload({ createParentPath: true }), updatePost)

export default postRouter