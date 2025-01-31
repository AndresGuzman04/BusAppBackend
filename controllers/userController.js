import { validateUser } from '../schemas/userSchema.js'
export class UserController {
  constructor ({ userModel }) {
    this.userModel = userModel
  }

  create = async (req, res) => {
    const result = validateUser(req.body)
    if (!result.succes) {
      return res.status(400).json({ error: JSON.parse(result.error.message) })
    }
    const newUser = await this.userModel.createUser({ input: result.data })

    res.status(201).json(newUser)
  }
}
