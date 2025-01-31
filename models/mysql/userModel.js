import connection from '../../utils/connection.js'

export class UserModel {
  static async getAllUsers () {
    const [user] = await connection.query('SELECT * FROM users')
    return user.map(user => ({
      ...user
    }))
  }

  static async getByIdUser ({ id }) {
    const [user] = await connection.query('SELECT * FROM user WHERE user_ID = ?', [id])
    return user[0]
  }

  static async createUser ({ input }) {
    // Generate new id
    const [[{ uuid }]] = await connection.query('SELECT UUID() AS uuid')

    // Add id in the input
    input.user_ID = uuid

    try {
      await connection.query('INSERT INTO users SET ?', { input })
    } catch (error) {
      return { message: 'User created Error', error }
    }
    return { message: 'User created successfully!' }
  }

  static async updateUser ({ id, input }) {
    try {
      // Obtener solo las claves enviadas en input (valores a actualizar)
      const fields = Object.keys(input)

      if (fields.length === 0) {
        throw new Error('No data provided to update')
      }

      // Crear la parte dinámica de SET: "title = ?, rate = ?"
      const setClause = fields.map(field => `${field} = ?`).join(', ')

      // Crear la consulta SQL dinámica
      const updateMovieQuery = `
        UPDATE users
        SET ${setClause}
        WHERE id = UUID_TO_BIN(?)
      `

      // Obtener los valores en el mismo orden que las claves
      const values = [...Object.values(input), id]

      // Ejecutar la consulta
      const [result] = await connection.execute(updateMovieQuery, values)

      if (result.affectedRows === 0) {
        throw new Error('Movie not found or no changes made')
      }

      return { message: 'Movie updated successfully!' }
    } catch (error) {
      throw new Error('Error updating movie: ' + error.message)
    }
  }

  static async deleteUser ({ id }) {
    try {
      const [result] = await connection.execute('DELETE FROM users WHERE id = ?', [id])
      if (result.affectedRows === 0) {
        throw new Error('Movie not found')
      }
      return { message: 'Movie deleted successfully!' }
    } catch (error) {
      throw new Error('Error deleting movie: ' + error.message)
    }
  }
}
