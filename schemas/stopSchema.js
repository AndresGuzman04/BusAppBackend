import z from 'zod'

const stopSchema = z.object({
  numStop: z.number().int().min(1).max(20),
  cityID: z.number().int(),
  duration: z.date(),
  routeID: z.number().int()
})

export function validateStop (input) {
  return stopSchema.safeParse(input)
}

export function validatePartialStop (input) {
  return stopSchema.partial().safeParse(input)
}
