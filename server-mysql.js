import { createApp } from './app.js'

import { RoutesModel } from './models/mysql/routesModel.js'
import { UserModel } from './models/mysql/userModel.js'

createApp({ routesModel: RoutesModel, usersModel: UserModel })
