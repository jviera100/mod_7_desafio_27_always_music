import pool from "../config/dbPool.js"; // Importamos la conexión a la base de datos PostgreSQL

// Función asíncrona para registrar un nuevo estudiante en la base de datos
export const registrarEstudiante = async (nombre, rut, curso, nivel) => {
    try {
      const query = 'INSERT INTO estudiantes (nombre, rut, curso, nivel) VALUES ($1, $2, $3, $4)';
      const values = [nombre, rut, curso, nivel];
      await pool.query(query, values);
      console.log('Estudiante registrado exitosamente.');
    } catch (error) {
      console.error('Error al registrar estudiante:', error.stack);
      throw error; // Lanzamos el error para que sea manejado en el código que llame a esta función
    }
  }
  
  // Función asíncrona para obtener por consola el registro de un estudiante por medio de su rut
  export const obtenerEstudiantePorRut = async(rut) => {
    try {
      const query = 'SELECT * FROM estudiantes WHERE rut = $1';
      const { rows } = await pool.query(query, [rut]);
      console.log(rows);
    } catch (error) {
      console.error('Error al obtener estudiante por rut:', error.stack);
      throw error; // Lanzamos el error para que sea manejado en el código que llame a esta función
    }
  }
  
  // Función asíncrona para obtener por consola todos los estudiantes registrados
  export const obtenerTodosLosEstudiantes = async () =>{
    try {
      // const query = 'SELECT * FROM estudiantes';
      // const { rows } = await pool.query(query);
      // console.log(rows);
      const result = await pool.query('SELECT * FROM estudiantes');
      console.log(result.rows);
    } catch (error) {
      console.error('Error al obtener todos los estudiantes:', error.stack);
      throw error; // Lanzamos el error para que sea manejado en el código que llame a esta función
    }
  }
  
  // Función asíncrona para actualizar los datos de un estudiante en la base de datos
  export const actualizarEstudiante = async (nombre, rut, curso, nivel) => {
    try {
      const result = await pool.query(
          'UPDATE estudiantes SET nombre = $1, curso = $2, nivel = $3 WHERE rut = $4 RETURNING *',
          [nombre, curso, nivel, rut]
      );
      if (result.rows.length > 0) {
          console.log(`Estudiante con ${nombre} con RUT ${rut} ha sido actualizado.`);//comilla francesa cuando hay parametro en texto plano o string
      } else {
          console.log('No se encontró un estudiante con el RUT proporcionado para actualizar.');
      }
  } catch (error) {
      console.error('Error al actualizar el estudiante:', error);
  }
};
  
  // Función asíncrona para eliminar el registro de un estudiante de la base de datos
  export const eliminarEstudiante = async (rut) => {
    try {
      const result = await pool.query('DELETE FROM estudiantes WHERE rut = $1 RETURNING *', [rut]);
      if (result.rows.length > 0) {
          console.log(`Registros de estudiante con RUT ${rut} ha sido eliminado.`);
          console.log(result.rows);
      } else {
          console.log('No se encontró un estudiante con el RUT proporcionado para eliminar.');
          console.log(result.rows);
      }
  } catch (error) {
      console.error('Error al eliminar el estudiante:', error);
  }
  }