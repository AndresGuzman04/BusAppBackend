import { validatePartialUser, validateUser } from '../schemas/userSchema.js'
import jwt from 'jsonwebtoken'

export class UserController {
  constructor ({ usersModel }) {
    this.usersModel = usersModel
  }

  create = async (req, res) => {
    const result = validateUser(req.body)
    if (!result.success) {
      return res.status(400).json({ error: JSON.parse(result.error.message) })
    }
    const newUser = await this.usersModel.createUser({ input: result.data })

    res.status(201).json(newUser)
  }

  login = async (req, res) => {
    const { email, password } = req.body
    try {
      const user = await this.usersModel.login({ email, password })
      const token = jwt.sign({ user_ID: user.user_ID, email: user.email }, process.env.SECRET_KEY, {
        expiresIn: '1h'
      })
      res.cookie('access_token', token, {
        httpOnly: true, // la cookie solo se puede acceder en el servidor
        secure: false, // solo se puede acceder en https
        sameSite: 'strict', // solo se puede acceder en el mismo dominio
        maxAge: 3600000 // la cookie expira en 1 hora
      })
        .send({ user, token })
    } catch (error) {
      res.status(401).send(error.message)
    }
  }

  logout = async (req, res) => {
    res
      .clearCookie('access_token')
      .json({ message: 'Logout successful' })
  }

  getAll = async (req, res) => {
    const users = await this.usersModel.getAllUsers()
    res.json(users)
  }

  getByID = async (req, res) => {
    const id = req.params.id
    const user = await this.usersModel.getUserByID({ id })
    if (user) return res.json(user)

    res.status(404).json({ message: 'User not exit' })
  }

  update = async (req, res) => {
    const id = req.params.id
    const result = validatePartialUser(req.body)

    if (!result.success) {
      return res.status(400).json({ error: JSON.parse(result.error.message) })
    }
    const user = await this.usersModel.updateUser({ id, input: result.data })
    return res.json(user)
  }

  delete = async (req, res) => {
    const id = req.params.id
    const userDelete = await this.usersModel.deleteUser({ id })
    return res.json(userDelete)
  }
}
