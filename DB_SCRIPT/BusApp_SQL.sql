DROP DATABASE IF EXISTS BusApp;

CREATE DATABASE BusApp;

USE BusApp;

-- Crear tabla de usuarios
CREATE TABLE users (
    user_ID BINARY(16),
    name VARCHAR(100) NOT NULL,
    email VARCHAR(150) UNIQUE NOT NULL,
    rol VARCHAR(20) NOT NULL,
    pass VARCHAR(255) NOT NULL,
    date_Register TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Crear tabla de departamentos
CREATE TABLE departaments (
	departament_ID INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL
);
-- Crear tabla de municipios
CREATE TABLE municipalitys (
	municipality_ID INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    departament_ID INT NOT NULL,
    FOREIGN KEY (departament_ID) REFERENCES departaments(departament_ID)
); 
-- Crear tabla de ciudades
CREATE TABLE citys (
	city_ID INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    municipality_ID INT NOT NULL,
    FOREIGN KEY (municipality_ID) REFERENCES municipalitys(municipality_ID)
);
 
-- Crear tabla de rutas
CREATE TABLE routes (
    route_ID INT AUTO_INCREMENT PRIMARY KEY,
    name_Route VARCHAR(100) NOT NULL,
    trip_number INT NOT NULL,
    arrival_Time TIME NOT NULL,
    departure_city INT NOT NULL,
    destination_city INT NOT NULL, -- Usa "destination_city" en lugar de "destination_City" para consistencia
    FOREIGN KEY (departure_city) REFERENCES citys(city_ID),
    FOREIGN KEY (destination_city) REFERENCES citys(city_ID)
);

 -- Crear paradas 
 CREATE TABLE stops (
	stop_ID INT AUTO_INCREMENT PRIMARY KEY,
    num_Stop INT NOT NULL,
    city_ID INT NOT NULL,
    duration TIME NOT NULL,
    route_ID INT NOT NULL,
    description VARCHAR(255),
    FOREIGN KEY (city_ID) REFERENCES citys(city_ID),
    FOREIGN KEY (route_ID) REFERENCES routes(route_ID)
 );

