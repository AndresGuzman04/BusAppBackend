import z from 'zod'

const userSchema = z.object({
  name: z.string({
    required_error: 'Name is required'
  }).min(5, 'Name must be at least 3 characters long'),
  email: z.string().email('Invalid email'),
  password: z.string().min(8, 'Password must be at least 8 characters long')
})

export function validateUser (input) {
  return userSchema.safeParse()
}

export function validatePartialUser () {
  return userSchema.partial().safeParse()
}
