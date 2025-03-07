import { createApp } from './app.js'

import { RoutesModel } from './models/mysql/routesModel.js'
import { UserModel } from './models/mysql/userModel.js'
import { CityModel } from './models/mysql/citysModel.js'
import { StopModel } from './models/mysql/stopModel.js'

createApp({ routesModel: RoutesModel, usersModel: UserModel, cityModel: CityModel, stopModel: StopModel })
