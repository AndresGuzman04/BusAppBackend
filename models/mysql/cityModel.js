export class CityModel {
  static async getAllCitys (connect) {
    const [citys] = await connect.query('SELECT * FROM city')
    return citys.map(city => ({
      ...city
    }))
  }
}
