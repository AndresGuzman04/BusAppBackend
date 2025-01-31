import connection from '../../utils/connection.js'

export class RoutesModel {
  static async getAllRoutes () {
    const [routes] = await connection.query('SELECT * FROM routes')
    return routes.map(route => ({
      ...route
    }))
  }

  static async getRouteById (id) {
    const [route] = await connection.query('SELECT * FROM routes WHERE route_ID = ?', [id])
    return route[0]
  }

  static async createRoute ({ input }) {
    const {
      nameRoute,
      tripNumber,
      arrivalTime,
      departureCity,
      destinationCity
    } = input

    try {
      await connection.query(
        `INSERT INTO routes (name_Route, trip_number, arrival_Time, departure_City, destination_City)
        VALUES (?, ?, ?, ?, ?)`, [nameRoute, tripNumber, arrivalTime, departureCity, destinationCity]
      )
    } catch (error) {
      return { message: 'Error creating route', error }
    }

    return { message: 'User created successfully!' }
  }

  static async deleteRoute ({ id }) {
    try {
      const idRoute = await connection.query('SELECT * FROM routes WHERE route_ID = ?', [id])
      if (idRoute[0].length > 0) {
        await connection.query('DELETE FROM routes WHERE id = ?', [id])
        return { message: 'Route deleted successfully!' }
      }
      return { message: 'Route not Exist' }
    } catch (error) {
      return false
    }
  }

  static async updateRoute ({ id, input }) {
    const {
      nameRoute,
      tripNumber,
      arrivalTime,
      departureCity,
      destinationCity
    } = input

    try {
      await connection.query(
        `UPDATE routes SET 
        (name_Route = ?, trip_number = ?, arrival_Time = ?, departure_City = ?, destination_City = ?
        WHERE route_ID = ?)`,
        [nameRoute, tripNumber, arrivalTime, departureCity, destinationCity, id]
      )
      return { message: 'Route updated successfully!' }
    } catch (error) {
      return { status: 404, message: 'Error updating route' }
    }
  }
}
