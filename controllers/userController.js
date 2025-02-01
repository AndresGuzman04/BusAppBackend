import { validateUser } from '../schemas/userSchema.js'
export class UserController {
  constructor ({ usersModel }) {
    this.usersModel = usersModel
  }

  getAll = async (req, res) => {
    const users = await this.usersModel.getAllUsers()
    res.json(users)
  }

  create = async (req, res) => {
    const result = validateUser(req.body)
    if (!result.success) {
      return res.status(400).json({ error: JSON.parse(result.error.message) })
    }
    const newUser = await this.usersModel.createUser({ input: result.data })

    res.status(201).json(newUser)
  }
}
