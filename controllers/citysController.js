export class citysController {
  constructor ({ citysModel }) {
    this.citysModel = citysModel
  }

  getAllCitys = async (req, res) => {
    const idMunicipality = req.params.idMunicipality
    const citys = await this.citysModel.getAllCitys(idMunicipality)
    res.json(citys)
  }

  getAllMunicipalitys = async (req, res) => {
    const idDepartament = req.params.idDepartament
    const municipalitys = await this.citysModel.getAllMunicipalitys(idDepartament)
    res.json(municipalitys)
  }

  getAllDepartaments = async (req, res) => {
    const departaments = await this.citysModel.getAllDepartaments()
    res.json(departaments)
  }
}
