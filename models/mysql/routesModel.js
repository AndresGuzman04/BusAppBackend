import connection from '../../utils/connection.js'

export class RoutesModel {
  static async getAllRoutes () {
    const [routes] = await connection.query('SELECT * FROM routes')
    return routes.map(route => ({
      ...route
    }))
  }

  static async getRouteById (id) {
    const route = await connection.query('SELECT * FROM routes WHERE id = ?', [id])
    return route[0]
  }
}
