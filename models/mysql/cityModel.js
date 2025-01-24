import connection from '../../utils/connection.js'

export class CityModel {
  static async getAllCitys () {
    const [citys] = await connection.query('SELECT * FROM city')
    return citys.map(city => ({
      ...city
    }))
  }
}
