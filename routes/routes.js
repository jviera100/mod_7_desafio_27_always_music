import express from "express";
import {registrarEstudiante, obtenerEstudiantePorRut, obtenerTodosLosEstudiantes, actualizarEstudiante, eliminarEstudiante} from "../controllers/queries.js"; 
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello World!");
});


router.post("/registrarEstudiante", registrarEstudiante);
router.get("/obtenerEstudiantePorRut", obtenerEstudiantePorRut);
//localhost:3000/obtenerTodosLosEstudiantes
router.get("/obtenerTodosLosEstudiantes", obtenerTodosLosEstudiantes);
router.put("/actualizarEstudiante", actualizarEstudiante);
router.delete("/eliminarEstudiante", eliminarEstudiante);

export default router;
