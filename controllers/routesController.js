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
    res.json(route)
  }
}
