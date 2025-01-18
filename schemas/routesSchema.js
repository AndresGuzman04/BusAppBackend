import z from 'zod'

const routesSchema = z.object({
  name_Route: z.string({
    required_error: 'Name is required',
    invalid_type_error: 'Name must be a string'
  }),
  trip_number: z.number().int().min(1).max(25),
  arrival_Time: z.date(),
  departure_city: z.number().int(),
  destination_city: z.number().int()
})

export function validateRoutes (input) {
  return routesSchema.safeParse(input)
}

export function validatePartialRoutes (input) {
  return routesSchema.partial().safeParse(input)
}
