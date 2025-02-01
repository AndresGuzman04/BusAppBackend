import { Router } from 'express'
import { RoutesController } from '../controllers/routesController.js'

export const createRoutesRouter = ({ routesModel }) => {
  const routesRouter = Router()

  const routesController = new RoutesController({ routesModel })

  routesRouter.get('/get-routes', routesController.getAll)

  routesRouter.get('/:id', routesController.getById)

  routesRouter.post('/create-route', routesController.create)

  routesRouter.delete('/:id', routesController.delete)

  routesRouter.patch('/:id', routesController.update)

  return routesRouter
}
