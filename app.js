import express, { json } from 'express'
import { corsMiddleware } from './middlewares/cors.js'

import cookieParser from 'cookie-parser'

import { createRoutesRouter } from './routes/routesRoutes.js'
import { createUserRouter } from './routes/userRoutes.js'
import { createCitysRouter } from './routes/citysRoutes.js'
import { createStopRouter } from './routes/stopRoutes.js'

import { jwtMiddleware } from './middlewares/jwtMiddleware.js'

export const createApp = ({ routesModel, usersModel, cityModel, stopModel }) => {
  const app = express()

  app.use(json())

  app.use(corsMiddleware())

  app.use(cookieParser())

  app.disable('x-powered-by') // deshabilitar el header X-Powered-By: Express

  app.use('/stops', jwtMiddleware, createStopRouter({ stopModel }))
  app.use('/location', jwtMiddleware, createCitysRouter({ cityModel }))
  app.use('/routes', jwtMiddleware, createRoutesRouter({ routesModel })) // ruta para Bus-Routes
  app.use('/users', createUserRouter({ usersModel })) // ruta para Users

  const PORT = process.env.PORT ?? 1234

  app.listen(PORT, () => {
    console.log(`server listening on port http://localhost:${PORT}`)
  })
}
