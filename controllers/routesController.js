import { validatePartialRoutes, validateRoutes } from '../schemas/routesSchema.js'

export class RoutesController {
  constructor ({ routesModel }) {
    this.routesModel = routesModel
  }

  getAll = async (req, res) => {
    try {
      const routes = await this.routesModel.getAllRoutes()
      res.json(routes)
    } catch (error) {
      res.status(500).json({ message: 'Internal Server Error' })
    }
  }

  getById = async (req, res) => {
    try {
      const id = req.params.id
      const route = await this.routesModel.getRouteById(id)
      if (route) return res.json(route)
      res.status(404).json({ message: 'Route not exit' })
    } catch (error) {
      res.status(500).json({ message: 'Internal Server Error' })
    }
  }

  create = async (req, res) => {
    try {
      const result = validateRoutes(req.body)
      if (!result.success) {
        return res.status(400).json({ error: JSON.parse(result.error.message) })
      }
      const newRoute = await this.routesModel.createRoute({ input: result.data })
      res.status(201).json(newRoute)
    } catch (error) {
      res.status(500).json({ message: 'Internal Server Error' })
    }
  }

  delete = async (req, res) => {
    try {
      const { id } = req.params

      const result = await this.routesModel.deleteRoute({ id })

      if (result === false) {
        return res.status(404).json({ message: 'Route not found' })
      }

      return res.json(result)
    } catch (error) {
      res.status(500).json({ message: 'Internal Server Error' })
    }
  }

  update = async (req, res) => {
    try {
      const { id } = req.params
      const result = validatePartialRoutes(req.body)

      if (!result.success) {
        return res.status(400).json({ error: JSON.parse(result.error.message) })
      }

      const updateRoute = await this.routesModel.updateRoute({ id, input: result.data })

      return res.json(updateRoute)
    } catch (error) {
      res.status(500).json({ message: 'Internal Server Error' })
    }
  }
}
