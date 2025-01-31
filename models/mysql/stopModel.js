import connection from '../../utils/connection.js'

export class StopModel {
  static async getAll () {
    const [stops] = await connection.query('SELECT * FROM stops')
    return stops.map(stop => ({
      ...stop
    }))
  }

  static async getByID ({ id }) {
    const stop = await connection.query('SELECT * FROM stops WHERE stop_ID = ?', [id])
    return stop
  }
}
