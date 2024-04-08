-- Creacion de la BBDD
CREATE DATABASE students;

--Creación de la tabla estudiantesselect * from estudiantes

drop table estudiantes

CREATE TABLE estudiantes (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    rut VARCHAR(12) NOT NULL UNIQUE,
    curso VARCHAR(50) NOT NULL,
    nivel VARCHAR(50)
);
insert into estudiantes(nombre, rut, curso, nivel) values('Brian May', '10.100.100-1', 'Java', 'Basico');
insert into estudiantes(nombre, rut, curso, nivel) values('John Doe', '10.100.100-2', 'Java', 'Basico');