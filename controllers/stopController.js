import { validateStop, validatePartialStop } from '../schemas/stopSchema.js'

export class StopController {
  constructor ({ stopModel }) {
    this.stopModel = stopModel
  }

  create = async (req, res) => {
    try {
      const stop = validateStop(req.body)
      if (!stop.success) return res.status(400).json({ error: JSON.parse(stop.error.message) })

      const newStop = await this.stopModel.createStop({ input: stop.data })
      return res.status(201).json(newStop)
    } catch (error) {
      return res.status(500).json({ error: 'Internal Server Error' })
    }
  }

  getAll = async (req, res) => {
    const idRoute = req.params.idRoute
    try {
      const stops = await this.stopModel.getAllStops(idRoute)
      return res.status(200).json(stops)
    } catch (error) {
      return res.status(500).json({ error: 'Internal Server Error' })
    }
  }

  update = async (req, res) => {
    try {
      const stop = validatePartialStop(req.body)
      const id = req.params.id
      if (!stop.success) return res.status(400).json({ error: JSON.parse(stop.error.message) })
      const updatedStop = await this.stopModel.updateStop({ id, input: stop.data })
      return res.status(200).json(updatedStop)
    } catch (error) {
      return res.status(500).json({ error: 'Internal Server Error' })
    }
  }

  delete = async (req, res) => {
    try {
      const id = req.params.id
      await this.stopModel.deleteStop(id)
      return res.status(204).send()
    } catch (error) {
      return res.status(500).json({ error: 'Internal Server Error' })
    }
  }
}
