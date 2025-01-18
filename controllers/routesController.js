import { validateRoutes, validatePartialrRoutes, validatePartialRoutes } from '../schemas/routesSchema.js'

export class RoutesController {
  constructor ({ routesModel }) {
    this.routesModel = routesModel
  }

  getAll = async (req, res) => {
    const routes = await this.routesModel.getAll()
    res.json(routes)
  }

  getByName = async (req, res) => {
    const { name } = req.params
    const routes = await this.routesModel.getByName({ name })
    if (routes) return res.json(routes)
    res.status(404).json({ message: 'Movie not found' })
  }

  create = async (req, res) => {
    const result = validateRoutes(req.body)

    if (!result.success) {
    // 422 Unprocessable Entity
      return res.status(400).json({ error: JSON.parse(result.error.message) })
    }

    const newRoute = await this.routesModel.create({ input: result.data })

    res.status(201).json(newRoute)
  }

  delete = async (req, res) => {
    const { id } = req.params

    const result = await this.routesModel.delete({ id })

    if (result === false) {
      return res.status(404).json({ message: 'Movie not found' })
    }

    return res.json(result)
  }

  update = async (req, res) => {
    const result = validatePartialRoutes(req.body)

    if (!result.success) {
      return res.status(400).json({ error: JSON.parse(result.error.message) })
    }

    const { id } = req.params

    const updatedRoutes = await this.routesModel.update({ id, input: result.data })

    return res.json(updatedRoutes)
  }
}
