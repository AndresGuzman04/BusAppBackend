export class CitysController {
  constructor ({ cityModel }) {
    this.cityModel = cityModel
  }

  getAllCitys = async (req, res) => {
    try {
      const idMunicipality = req.params.idMunicipality
      const citys = await this.cityModel.getAllCitys({ idMunicipality })
      res.json(citys)
    } catch (error) {
      res.status(500).json({ message: 'Internal Server Error' })
    }
  }

  getCityById = async (req, res) => {
    const idCity = req.params.idCity
    try {
      const city = await this.cityModel.getCityById({ idCity })
      res.json(city)
    } catch (error) {
      res.status(500).json({ message: 'Internal Server Error' })
    }
  }

  getAllMunicipalitys = async (req, res) => {
    try {
      const idDepartament = req.params.idDepartament
      const municipalitys = await this.cityModel.getAllMunicipalitys({ idDepartament })
      res.json(municipalitys)
    } catch (error) {
      res.status(500).json({ message: 'Internal Server Error' })
    }
  }

  getAllDepartaments = async (req, res) => {
    try {
      const departaments = await this.cityModel.getDepartaments()
      res.json(departaments)
    } catch (error) {
      res.status(500).json({ message: 'Internal Server Error' })
    }
  }
}
