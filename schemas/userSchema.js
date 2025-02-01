import z from 'zod'

const userSchema = z.object({
  name: z.string({
    required_error: 'Name is required'
  }).min(5, 'Name must be at least 3 characters long'),
  email: z.string().email('Invalid email'),
  password: z.string().min(8, 'Password must be at least 8 characters long'),
  rol: z.enum(['admin', 'user']),
  state: z.enum(['active', 'inactive'])
})

export function validateUser (input) {
  return userSchema.safeParse(input)
}

export function validatePartialUser (input) {
  return userSchema.partial().safeParse(input)
}
