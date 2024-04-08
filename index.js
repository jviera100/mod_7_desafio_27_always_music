import express from 'express';
import router from './routes/routes.js';
import {registrarEstudiante, obtenerEstudiantePorRut, obtenerTodosLosEstudiantes, actualizarEstudiante, eliminarEstudiante} from "./controllers/queries.js"; 
const app = express();
const PORT = 3000;

//middlewares
app.use(router);

  const main = async () => {
    const action = process.argv[2]; // Acción a realizar (addUser, getUsers, etc.)
    const args = process.argv.slice(2); // Argumentos para la acción
    switch (action) {
        case 'add': //reclarar funcion o consulta y asi llamra el comando de la consola
            await registrarEstudiante(...args);
            break;
        case 'gets':
            await obtenerTodosLosEstudiantes();
            break;
        case 'get':
            await obtenerEstudiantePorRut(args[1]); //llama al rut ya omitiendo 2 slice
            break;
        case 'update':        // Argumentos para la acción
            await actualizarEstudiante(args[1], args[2], args[3], args[4]);
            break;
        case 'remove':
            await eliminarEstudiante(args[1]);  
            console.log(args); //muestra valores en arreglo          
            break;
        default:
            console.log('Acción no reconocida');
    }
};
main();



//index importa rutas importa query importa config conexion db importa .env