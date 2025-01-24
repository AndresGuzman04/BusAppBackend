import { Router } from 'express'
import { RoutesController } from '../controllers/routesController.js'

export const createRoutesRouter = ({ routesModel }) => {
  const routesRouter = Router()

  const routesController = new RoutesController({ routesModel })

  routesRouter.get('/', routesController.getAll)

  return routesRouter
}
