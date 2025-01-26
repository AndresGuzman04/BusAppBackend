import { validatePartialRoutes, validateRoutes } from '../schemas/routesSchema.js'

export class RoutesController {
  constructor ({ routesModel }) {
    this.routesModel = routesModel
  }

  getAll = async (req, res) => {
    const routes = await this.routesModel.getAllRoutes()
    res.json(routes)
  }

  getById = async (req, res) => {
    const id = req.params.id
    const route = await this.routesModel.getRouteById(id)
    if (route) return res.json(route)
    res.status(404).json({ message: 'Route not found' })
  }

  create = async (req, res) => {
    const result = validateRoutes(req.body)
    if (!result.success) {
      return res.status(400).json({ error: JSON.parse(result.error.message) })
    }
    const newRoute = await this.routesModel.createRoute(req.body)
    res.status(201).json(newRoute)
  }

  delete = async (req, res) => {
    const { id } = req.params

    const result = await this.movieModel.delete({ id })

    if (result === false) {
      return res.status(404).json({ message: 'Movie not found' })
    }

    return res.json(result)
  }

  update = async (req, res) => {
    const { id } = req.params
    const result = validatePartialRoutes(req.body)

    if (!result.success) {
      return res.status(400).json({ error: JSON.parse(result.error.message) })
    }

    const updateRoute = await this.movieModel.update({ id, input: result.data })

    return res.json(updateRoute)
  }
}
