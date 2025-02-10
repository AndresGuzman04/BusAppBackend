import { Router } from 'express'
import { UserController } from '../controllers/userController.js'

export const createUserRouter = ({ usersModel }) => {
  const userRouter = Router()

  const userController = new UserController({ usersModel })

  userRouter.post('/create-user', userController.create)
  userRouter.get('/get-users', userController.getAll)
  userRouter.get('/:id', userController.getByID)
  userRouter.patch('/:id', userController.update)

  return userRouter
}
