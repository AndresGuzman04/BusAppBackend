import { Router } from 'express'
import { UserController } from '../controllers/userController.js'

export const createUserRouter = ({ usersModel }) => {
  const userRouter = Router()

  const userController = new UserController({ usersModel })

  userRouter.post('/create-user', userController.create)
  userRouter.post('/login', userController.login)
  userRouter.get('/get-users', userController.getAll)
  userRouter.get('/:id', userController.getByID)
  userRouter.patch('/:id', userController.update)
  userRouter.delete('/:id', userController.delete)

  return userRouter
}
