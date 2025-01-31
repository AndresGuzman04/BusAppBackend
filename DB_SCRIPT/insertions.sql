INSERT INTO departaments (id, name) VALUES
(1, 'Ahuachapán'),
(2, 'Cabañas'),
(3, 'Chalatenango'),
(4, 'Cuscatlán'),
(5, 'La Libertad'),
(6, 'La Paz'),
(7, 'La Unión'),
(8, 'Morazán'),
(9, 'San Miguel'),
(10, 'San Salvador'),
(11, 'San Vicente'),
(12, 'Santa Ana'),
(13, 'Sonsonate'),
(14, 'Usulután');

--Ahuachapán
INSERT INTO municipalitys (id, name, departament_id) VALUES
(1, 'Ahuachapán Norte', 1),
(2, 'Ahuachapán Centro', 1),
(3, 'Ahuachapán Sur', 1);

INSERT INTO citys (name, municipality_id) VALUES
('Atiquizaya', 1),
('El Refugio', 1),
('San Lorenzo', 1),
('Turín', 1),
('Ahuachapán', 2),
('Apaneca', 2),
('Concepción de Ataco', 2),
('Tacuba', 2),
('Guaymango', 3),
('Jujutla', 3),
('San Francisco Menendez', 3),
('San Pedro Puxtla', 3);

--Cabañas
INSERT INTO municipalitys (id, name, departament_id) VALUES
(4, 'Cabañas Este', 2),
(5, 'Cabañas Oeste', 2);

INSERT INTO citys (name, municipality_id) VALUES
('Sensuntepeque', 4),
('Victoria', 4),
('Dolores', 4),
('Guacotecti', 4),
('San Isidro', 4),
('Ilobasco', 5),
('Tejutepeque', 5),
('Jutiapa', 5),
('Cinquera', 5);

--Chalatenango
INSERT INTO municipalitys (id, name, departament_id) VALUES
(6, 'Chalatenango Norte', 3),
(7, 'Chalatenango Centro', 3),
(8, 'Chalatenango Sur', 3);

INSERT INTO citys (name, municipality_id) VALUES
('La Palma', 6),
('Citalá', 6),
('San Ignacio', 6),
('Nueva Concepción', 7),
('Tejutla', 7),
('La Reina', 7),
('Agua Caliente', 7),
('Dulce Nombre de María', 7),
('El Paraíso', 7),
('San Francisco Morazán', 7),
('San Rafael', 7),
('Santa Rita', 7),
('San Fernando', 7),
('Chalatenango', 8),
('Arcatao', 8),
('Azacualpa', 8),
('Comalapa', 8),
('Concepción Quezaltepeque', 8),
('El Carrizal', 8),
('La Laguna', 8),
('Las Vueltas', 8),
('Nombre de Jesús', 8),
('Nueva Trinidad', 8),
('Ojos de Agua', 8),
('Potonico', 8),
('San Antonio de La Cruz', 8),
('San Antonio Los Ranchos', 8),
('San Francisco Lempa', 8),
('San Isidro Labrador', 8),
('San José Cancasque', 8),
('San Miguel de Mercedes', 8),
('San José Las Flores', 8),
('San Luis del Carmen', 8);

--Cuscatlán
INSERT INTO municipalitys (id, name, departament_id) VALUES
(9, 'Cuscatlán Norte', 4),
(10, 'Cuscatlán Sur', 4);

INSERT INTO citys (name, municipality_id) VALUES
('Suchitoto', 9),
('San José Guayabal', 9),
('Oratorio de Concepción', 9),
('San Bartolomé Perulapán', 9),
('San Pedro Perulapán', 9),
('Cojutepeque', 10),
('San Rafael Cedros', 10),
('Candelaria', 10),
('Monte San Juan', 10),
('El Carmen', 10),
('San Cristóbal', 10),
('Santa Cruz Michapa', 10),
('San Ramón', 10),
('El Rosario', 10),
('Santa Cruz Analquito', 10),
('Tenancingo', 10);

--La Libertad
INSERT INTO municipalitys (id, name, departament_id) VALUES
(11, 'La Libertad Norte', 5),
(12, 'La Libertad Centro', 5),
(13, 'La Libertad Oeste', 5),
(14, 'La Libertad Este', 5),
(15, 'La Libertad Costa', 5),
(16, 'La Libertad Sur', 5);

INSERT INTO citys (name, municipality_id) VALUES
('Quezaltepeque', 11),
('San Matías', 11),
('San Pablo Tacachico', 11),
('San Juan Opico', 12),
('Ciudad Arce', 12),
('Colón', 13),
('Jayaque', 13),
('Sacacoyo', 13),
('Tepecoyo', 13),
('Talnique', 13),
('Antiguo Cuscatlán', 14),
('Huizúcar', 14),
('Nuevo Cuscatlán', 14),
('San José Villanueva', 14),
('Zaragoza', 14),
('Chiltuipán', 15),
('Jicalapa', 15),
('La Libertad', 15),
('Tamanique', 15),
('Teotepeque', 15),
('Comasagua', 16),
('Santa Tecla', 16);

--La Paz
INSERT INTO municipalitys (id, name, departament_id) VALUES
(17, 'La Paz Oeste', 6),
(18, 'La Paz Centro', 6),
(19, 'La Paz Este', 6);

INSERT INTO citys (name, municipality_id) VALUES
('Cuyultitán', 17),
('Olocuilta', 17),
('San Juan Talpa', 17),
('San Luis Talpa', 17),
('San Pedro Masahuat', 17),
('Tapalhuaca', 17),
('San Francisco Chinameca', 17),
('El Rosario', 18),
('Jerusalén', 18),
('Mercedes La Ceiba', 18),
('Paraíso de Osorio', 18),
('San Antonio Masahuat', 18),
('San Emigdio', 18),
('San Juan Tepezontes', 18),
('San Luis La Herradura', 18),
('San Miguel Tepezontes', 18),
('San Pedro Nonualco', 18),
('Santa María Ostuma', 18),
('Santiago Nonualco', 18),
('San Juan Nonualco', 19),
('San Rafael Obrajuelo', 19),
('Zacatecoluca', 19);

--La Unión
INSERT INTO municipalitys (id, name, departament_id) VALUES
(20, 'La Unión Norte', 7),
(21, 'La Unión Sur', 7);

INSERT INTO citys (name, municipality_id) VALUES
('Anamorós', 20),
('Bolivar', 20),
('Concepción de Oriente', 20),
('El Sauce', 20),
('Lislique', 20),
('Nueva Esparta', 20),
('Pasaquina', 20),
('Polorós', 20),
('San José La Fuente', 20),
('Santa Rosa de Lima', 20),
('Conchagua', 21),
('El Carmen', 21),
('Intipucá', 21),
('La Unión', 21),
('Meanguera del Golfo', 21),
('San Alejo', 21),
('Yayantique', 21),
('Yucuaiquín', 21);

--Morazan
INSERT INTO municipalitys (id, name, departament_id) VALUES
(22, 'Morazán Norte', 8),
(23, 'Morazán Sur', 8);

INSERT INTO citys (name, municipality_id) VALUES
('Arambala', 22),
('Cacaopera', 22),
('Corinto', 22),
('El Rosario', 22),
('Joateca', 22),
('Jocoaitique', 22),
('Meanguera', 22),
('Perquín', 22),
('San Fernando', 22),
('San Isidro', 22),
('Torola', 22),
('Chilanga', 23),
('Delicias de Concepción', 23),
('El Divisadero', 23),
('Gualococti', 23),
('Guatajiagua', 23),
('Jocoro', 23),
('Lolotiquillo', 23),
('Osicala', 23),
('San Carlos', 23),
('San Francisco Gotera', 23),
('San Simón', 23),
('Sensembra', 23),
('Sociedad', 23),
('Yamabal', 23),
('Yoloaiquín', 23);

--San Miguel
INSERT INTO municipalitys (id, name, departament_id) VALUES
(24, 'San Miguel Norte', 9),
(25, 'San Miguel Centro', 9),
(26, 'San Miguel Oeste', 9);

INSERT INTO citys (name, municipality_id) VALUES
('Ciudad Barrios', 24),
('Sesori', 24),
('Nuevo Edén de San Juan', 24),
('San Gerardo', 24),
('San Luis de La Reina', 24),
('Carolina', 24),
('San Antonio del Mosco', 24),
('Chapeltique', 24),
('San Miguel', 25),
('Comacarán', 25),
('Uluazapa', 25),
('Moncagua', 25),
('Quelepa', 25),
('Chirilagua', 25),
('Chinameca', 26),
('Nueva Guadalupe', 26),
('Lolotique', 26),
('San Jorge', 26),
('San Rafael Oriente', 26),
('El Tránsito', 26);

--San Salvador
INSERT INTO municipalitys (id, name, departament_id) VALUES
(27, 'San Salvador Norte', 10),
(28, 'San Salvador Oeste', 10),
(29, 'San Salvador Este', 10),
(30, 'San Salvador Centro', 10),
(31, 'San Salvador Sur', 10);

INSERT INTO citys (name, municipality_id) VALUES
('Aguilares', 27),
('El Paisnal', 27),
('Guazapa', 27),
('Apopa', 28),
('Nejapa', 28),
('Ilopango', 29),
('San Martín', 29),
('Soyapango', 29),
('Tonacatepeque', 29),
('Ayutuxtepeque', 30),
('Mejicanos', 30),
('San Salvador', 30),
('Cuscatancingo', 30),
('Ciudad Delgado', 30),
('Panchimalco', 31),
('Rosario de Mora', 31),
('San Marcos', 31),
('Santo Tomás', 31),
('Santiago Texacuangos', 31);

--San Vicente
INSERT INTO municipalitys (id, name, departament_id) VALUES
(32, 'San Vicente Norte', 11),
(33, 'San Vicente Sur', 11);

INSERT INTO citys (name, municipality_id) VALUES
('Apastepeque', 32),
('Santa Clara', 32),
('San Ildefonso', 32),
('San Esteban Catarina', 32),
('San Sebastián', 32),
('San Lorenzo', 32),
('Santo Domingo', 32),
('San Vicente', 33),
('Guadalupe', 33),
('Verapaz', 33),
('Tepetitán', 33),
('Tecoluca', 33),
('San Cayetano Istepeque', 33);

--Santa Ana
INSERT INTO municipalitys (id, name, departament_id) VALUES
(34, 'Santa Ana Norte', 12),
(35, 'Santa Ana Centro', 12),
(36, 'Santa Ana Este', 12),
(37, 'Santa Ana Oeste', 12);

INSERT INTO citys (name, municipality_id) VALUES
('Masahuat', 34),
('Metapán', 34),
('Santa Rosa Guachipilín', 34),
('Texistepeque', 34),
('Santa Ana', 35),
('Coatepeque', 36),
('El Congo', 36),
('Candelaria de la Frontera', 37),
('Chalchuapa', 37),
('El Porvenir', 37),
('San Antonio Pajonal', 37),
('San Sebastián Salitrillo', 37),
('Santiago de La Frontera', 37);

--Sonsonate
INSERT INTO municipalitys (id, name, departament_id) VALUES
(38, 'Sonsonate Norte', 13),
(39, 'Sonsonate Centro', 13),
(40, 'Sonsonate Este', 13),
(41, 'Sonsonate Oeste', 13);

INSERT INTO citys (name, municipality_id) VALUES
('Juayúa', 38),
('Nahuizalco', 38),
('Salcoatitán', 38),
('Santa Catarina Masahuat', 38),
('Sonsonate', 39),
('Sonzacate', 39),
('Nahulingo', 39),
('San Antonio del Monte', 39),
('Santo Domingo de Guzmán', 39),
('Izalco', 40),
('Armenia', 40),
('Caluco', 40),
('San Julián', 40),
('Cuisnahuat', 40),
('Santa Isabel Ishuatán', 40),
('Acajutla', 41);

--Usulután
INSERT INTO municipalitys (id, name, departament_id) VALUES
(42, 'Usulután Norte', 14),
(43, 'Usulután Este', 14),
(44, 'Usulután Oeste', 14);

INSERT INTO citys (name, municipality_id) VALUES
('Santiago de María', 42),
('Alegría', 42),
('Berlín', 42),
('Mercedes Umaña', 42),
('Jucuapa', 42),
('El Triunfo', 42),
('Estanzuelas', 42),
('San Buenaventura', 42),
('Nueva Granada', 42),
('Usulután', 43),
('Jucuarán', 43),
('San Dionisio', 43),
('Concepción Batres', 43),
('Santa María', 43),
('Ozatlán', 43),
('Tecapán', 43),
('Santa Elena', 43),
('California', 43),
('Ereguayquín', 43),
('Jiquilisco', 44),
('Puerto El Triunfo', 44),
('San Agustín', 44),
('San Francisco Javier', 44);

