import connection from '../../utils/connection.js'

export class RoutesModel {
  static async getAllRoutes () {
    const [citys] = await connection.query('SELECT * FROM routes')
    return citys.map(city => ({
      ...city
    }))
  }
}
