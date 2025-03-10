import connection from '../../utils/connection.js'
import bcrypt from 'bcrypt'

export class UserModel {
  static async createUser ({ input }) {
    const {
      name,
      email,
      password,
      rol,
      state
    } = input
    // Generate new id
    const [[{ uuid }]] = await connection.query('SELECT UUID() AS uuid')
    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10)

    try {
      await connection.query(`INSERT INTO users (user_ID, name_User, email, pass, rol, state_User)
        Values (UUID_TO_BIN("${uuid}"), ?, ?, ?, ?, ?)`, [name, email, hashedPassword, rol, state])
    } catch (error) {
      return { message: 'User created Error', error }
    }
    return { message: 'User created successfully!' }
  }

  static async login ({ email, password }) {
    try {
      const [rows] = await connection.query('SELECT BIN_TO_UUID(user_ID) as user_ID, name_User, email, pass FROM users WHERE email = ?', [email
      ])
      const user = rows[0]
      if (!user) return { message: 'Email not found' }

      const isValidPassword = await bcrypt.compare(password, user.pass)
      if (!isValidPassword) return { message: 'Invalid password' }

      return user
    } catch (error) {
      return { message: 'Error logging in, please try again later' }
    }
  }

  static async getAllUsers () {
    try {
      const [users] = await connection.query(`SELECT 
        BIN_TO_UUID(user_ID) as user_ID,
        name_User, email, pass, rol, state_User, date_Register
         FROM users`)
      return users.map(user => ({ ...user }))
    } catch (error) {
      console.error('Error al obtener usuarios:', error)
      throw error // o retornar una respuesta adecuada
    }
  }

  static async getUserByID ({ id }) {
    try {
      const [user] = await connection.query(`SELECT  
        BIN_TO_UUID(user_ID) as user_ID, name_User, email, pass, rol, state_User, date_Register 
        FROM users WHERE BIN_TO_UUID(user_ID) = ?`, [id])
      return user[0]
    } catch (error) {
      return { message: 'Error al obtener usuario' }
    }
  }

  static async updateUser ({ id, input }) {
    const fieldMap = {
      name: 'name_User',
      password: 'pass',
      state: 'state_User'
    }

    // Obtener las claves de `input` y reemplazarlas si existen en `fieldMap`
    const fields = Object.keys(input)
    const dbFields = fields.map(field => `${fieldMap[field] || field} = ?`).join(', ')

    // Crear la consulta SQL dinámica
    const updateUserQuery = `
      UPDATE users
      SET ${dbFields}
      WHERE BIN_TO_UUID(user_ID) = ?
    `

    // Obtener los valores en el mismo orden que las claves
    const values = [...Object.values(input), id]

    try {
      const [validateID] = await connection.query('SELECT * FROM users WHERE BIN_TO_UUID(user_ID) = ?', [id])

      if (!validateID[0]) {
        return { message: 'User not found' }
      }

      await connection.execute(updateUserQuery, values)
      return { message: 'User updated successfully' }
    } catch (error) {
      return { message: 'Error update user' }
    }
  }
}
