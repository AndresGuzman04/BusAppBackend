import { Router } from 'express'
import { UserController } from '../controllers/userController.js'

export const createUserRouter = ({ userModel }) => {
  const userRouter = Router()

  const userController = new UserController({ userModel })

  userRouter.post('/create-user', userController.create)

  return userRouter
}
