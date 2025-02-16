import cors from 'cors'

const ACCEPTED_ORIGINS = [
  '',
  ''
]

export const corsMiddleware = ({ acceptedOrigins = [...ACCEPTED_ORIGINS] } = {}) => cors({
  origin: (origin, callback) => {
    // Permitir solicitudes de orígenes aceptados
    if (acceptedOrigins.includes(origin)) {
      return callback(null, true)
    }

    // Permitir solicitudes sin origen (herramientas como Postman)
    if (!origin) {
      return callback(null, true)
    }

    // Bloquear orígenes no aceptados
    console.error(`Blocked CORS request from origin: ${origin}`)
    return callback(new Error(`Origin ${origin} not allowed by CORS`), false)
  }
})
