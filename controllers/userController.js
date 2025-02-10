import { validateUser } from '../schemas/userSchema.js'
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
}
