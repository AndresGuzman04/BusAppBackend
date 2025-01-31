import z from 'zod'

const userSchema = z.object({
  name: z.string({
    required_error: 'Name is required'
  }).min(5, 'Name must be at least 3 characters long'),
  email: z.string().email('Invalid email'),
  password: z.string().min(8, 'Password must be at least 8 characters long'),
  rol: z.array(
    z.enum(['admin', 'user']),
    {
      required_error: 'rol is required.',
      invalid_type_error: 'Rol must be an array of enum Roles'
    }
  ),
  state: z.array(
    z.enum(['active', 'inactive']),
    {
      required_error: 'state is required.',
      invalid_type_error: 'State must be an array of enum States'
    }
  )
})

export function validateUser (input) {
  return userSchema.safeParse(input)
}

export function validatePartialUser (input) {
  return userSchema.partial().safeParse(input)
}
