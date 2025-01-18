import { connection } from '../../utils/connection.js'

const connect = connection

export class RoutesModel {
  static async getAllRoutes () {
    const [routes] = await connect.query(`SELECT 
    r.route_ID,
    r.name_Route,
    r.trip_number,
    c1.name AS departure_city,
    c2.name AS destination_city,
    r.arrival_Time
    FROM 
        routes r
    INNER JOIN 
        citys c1
    ON 
        r.departure_city = c1.city_ID
    INNER JOIN 
        citys c2
    ON 
        r.destination_City = c2.city_ID;
    `)
    return routes.map(route => ({
      ...route
    }))
  }

  static async getRouteStopsByName (name) {
    const [routeStops] = await connect.query(`SELECT 
    r.route_ID,
    r.name_Route,
    s.num_Stop,
    s.description AS stop_description,
    s.duration AS stop_duration,
    c.name AS stop_city
    FROM 
        routes r
    INNER JOIN 
        stops s
    ON 
        r.route_ID = s.route_ID
    INNER JOIN 
        citys c
    ON 
        s.city_ID = c.city_ID
    WHERE 
        r.name_Route = ?;`,
    [name])

    return routeStops.map(routeStop => ({
      ...routeStop
    }))
  }
}
