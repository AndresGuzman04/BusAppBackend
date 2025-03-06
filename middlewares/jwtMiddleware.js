import jwt from 'jsonwebtoken'

export const jwtMiddleware = (req, res, next) => {
  const token = req.cookies.access_token

  if (!token) {
    return res.status(401).send('Access token is required')
  }

  try {
    const data = jwt.verify(token, process.env.SECRET_KEY)
    req.session = req.session || {} // Asegura que `req.session` existe
    req.session.user = data
    next() // Pasa al siguiente middleware o ruta
  } catch (error) {
    console.error('JWT Verification Error:', error.message)
    return res.status(401).send('Invalid or expired token')
  }
}
