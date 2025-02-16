import connection from '../../utils/connection.js'

export class CityModel {
  static async getAllCitys ({ idMunicipality }) {
    try {
      const validateMunicipality = await connection.query('SELECT * FROM municipalities WHERE municipality_ID = ?',
        idMunicipality)
      if (validateMunicipality.length === 0) {
        return { status: 404, message: 'Municipality not found' }
      }

      const [citys] = await connection.query(`SELECT City_ID, name,
        FROM citys WHERE municipality_ID = ?;`, idMunicipality)
      return citys.map(city => ({
        ...city
      }))
    } catch (error) {
      return { message: 'Error', status: 404 }
    }
  }

  static async getAllMunicipalitys ({ idDepartament }) {
    try {
      const validateDepartament = await connection.query('SELECT * FROM departaments WHERE departament_ID = ?',
        idDepartament)
      if (validateDepartament.length === 0) {
        return { status: 404, message: 'Departament not found' }
      }
      const [municipalities] = await connection.query(`SELECT municipality_ID, name 
        FROM municipalitys WHERE departament_ID = ? `, idDepartament)
      return municipalities.map(municipality => ({
        ...municipality
      }))
    } catch (error) {
      return { message: 'Error', status: 500 }
    }
  }

  static async getDepartaments () {
    try {
      const [departaments] = await connection.query('SELECT * FROM departaments')
      return departaments.map(departament => ({
        ...departament
      }))
    } catch (error) {
      return { message: 'Error', status: 500 }
    }
  }
}
