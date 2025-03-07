import { Router } from 'express'
import { StopController } from '../controllers/stopController.js'

export const createStopRouter = ({ usersModel }) => {
  const userRouter = Router()

  const stopController = new StopController({ usersModel })

  userRouter.post('/create-stop', stopController.create)
  userRouter.get('/get-stops/:idRoute', stopController.getAll)
  userRouter.patch('/:id', stopController.update)
  userRouter.delete('/:id', stopController.delete)

  return userRouter
}
