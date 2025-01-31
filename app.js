import express, { json } from 'express'

import { createRoutesRouter } from './routes/routesRoutes.js'
import { createUserRouter } from './routes/userRoutes.js'

export const createApp = ({ routesModel, usersModel }) => {
  const app = express()

  app.use(json())

  app.disable('x-powered-by') // deshabilitar el header X-Powered-By: Express

  app.use('/routes', createRoutesRouter({ routesModel })) // ruta para Bus-Routes
  app.use('/users', createUserRouter({ usersModel })) // ruta para Users

  const PORT = process.env.PORT ?? 1234

  app.listen(PORT, () => {
    console.log(`server listening on port http://localhost:${PORT}`)
  })
}
