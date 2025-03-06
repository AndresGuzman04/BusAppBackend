import { Router } from 'express'
import { UserController } from '../controllers/userController.js'
import { jwtMiddleware } from '../middlewares/jwtMiddleware.js'

export const createUserRouter = ({ usersModel }) => {
  const userRouter = Router()

  const userController = new UserController({ usersModel })

  userRouter.post('/create-user', userController.create)
  userRouter.post('/login', userController.login)

  userRouter.get('/get-users', jwtMiddleware, userController.getAll)
  userRouter.get('/:id', jwtMiddleware, userController.getByID)
  userRouter.patch('/:id', jwtMiddleware, userController.update)
  userRouter.delete('/:id', jwtMiddleware, userController.delete)
  userRouter.post('/logout', jwtMiddleware, userController.logout)

  return userRouter
}
