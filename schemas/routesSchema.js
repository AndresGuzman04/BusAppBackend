import z from 'zod'

const routesSchema = z.object({
  nameRoute: z.string({
    required_error: 'Name is required',
    invalid_type_error: 'Name must be a string'
  }),
  tripNumber: z.number().int().min(1).max(25),
  arrivalTime: z.string().time(),
  departureCity: z.number().int(),
  destinationCity: z.number().int()
})

export function validateRoutes (input) {
  return routesSchema.safeParse(input)
}

export function validatePartialRoutes (input) {
  return routesSchema.partial().safeParse(input)
}
