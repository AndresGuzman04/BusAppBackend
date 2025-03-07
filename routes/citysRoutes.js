import { Router } from 'express'
import { CitysController } from '../controllers/citysController.js'

export const createCitysRouter = ({ cityModel }) => {
  const Citysrouter = Router()

  const citysController = new CitysController({ cityModel })

  Citysrouter.get('/city/:idCity', citysController.getCityById)
  Citysrouter.get('/citys/:idMunicipality', citysController.getAllCitys)
  Citysrouter.get('/municipality/:idDepartament', citysController.getAllMunicipalitys)
  Citysrouter.get('/departaments', citysController.getAllDepartaments)

  return Citysrouter
}
