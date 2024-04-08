import pkg from 'pg'; // Importamos la clase pool desde pg
import "dotenv/config";
const { Pool } = pkg; // Importamos la clase Pool desde pg { Pool }

// Configuración de la conexión a la base de datos PostgreSQL
const pool = new Pool({  
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_DATABASE,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,  
  allowExitOnIdle: true //cierra la conexión si no se hace ningún cambio en el tiempo de espera
});

// // Función asíncrona para conectar a la base de datos
// async function connectDB() {
//   try {
//     await pool.connect();
//     console.log('Conexión exitosa a la base de datos');
//   } catch (error) {
//     console.error('Error al conectar con la base de datos:', error.stack);
//     throw error; // Lanzamos el error para que sea manejado en el código que llame a esta función
//   }
// }

export default pool