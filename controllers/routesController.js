export class RoutesController {
  constructor ({ routesModel }) {
    this.routesModel = routesModel
  }

  getAll = async (req, res) => {
    const routes = await this.routesModel.getAllRoutes()
    res.json(routes)
  }
}
