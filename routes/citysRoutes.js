import { Router } from 'express'
import { CitysController } from '../controllers/citysController.js'

export const createCitysRouter = ({ citysModel }) => {
  const Citysrouter = Router()

  const citysController = new CitysController({ citysModel })

  Citysrouter.get('/:idMunicipality', citysController.getAllCitys)
  Citysrouter.get('/municipality/:idDepartament', citysController.getAllMunicipalitys)
  Citysrouter.get('/departaments', citysController.getAllDepartaments)
}
