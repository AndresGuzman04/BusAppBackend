import connection from '../../utils/connection.js'

export class StopModel {
  static async createStop ({ input }) {
    const {
      numStop,
      cityID,
      duration,
      routeID,
      description
    } = input
    try {
      await connection.query(`INSERT INTO stops (num_Stop, city_ID, duration, route_ID, description) 
        VALUES (?, ?, ?, ?, ?)`, [numStop, cityID, duration, routeID, description])

      return { message: 'Stop created successfully' }
    } catch (error) {
      return { message: 'Error creating stop' }
    }
  }

  static async updateStop ({ id, input }) {
    const {
      numStop,
      cityID,
      duration,
      routeID,
      description
    } = input
    try {
      const [stop] = await connection.query('SELECT * FROM stops WHERE id = ?', id)
      if (!stop[0]) return { message: 'Stop not found' }

      await connection.query(`UPDATE stops SET num_Stop = ?, city_ID = ?, duration = ?, route_ID =
        ?, description = ? WHERE id = ?`, [numStop, cityID, duration, routeID, description, id])
      return { message: 'Stop updated successfully' }
    } catch (error) {
      return { message: 'Error updating stop' }
    }
  }

  static async deleteStop ({ id }) {
    try {
      const [stop] = await connection.query('SELECT * FROM stops WHERE id = ?', id)
      if (!stop[0]) return { message: 'Stop not found' }

      await connection.query('DELETE FROM stops WHERE id = ?', id)
      return { message: 'Stop deleted successfully' }
    } catch (error) {
      return { message: 'Error deleting stop' }
    }
  }

  static async getAllStops ({ idRoute }) {
    try {
      const [stops] = await connection.query('SELECT * FROM stops WHERE idRoute = ?', idRoute)
      return stops.map(stop => ({
        ...stop
      }))
    } catch (error) {
      return { message: 'Error fetching stops' }
    }
  }
}
