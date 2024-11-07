import { Router } from "express";
import StudentRepository from "../models/users/StudentRepository.js";

const studentsRoutes = Router();
const studentsList = new StudentRepository();

studentsRoutes.get("/", (req, res) => {
    const students = studentsList.getAllStudents()
    return res.status(200).json({
        message:
        students.length == 0
        ? "Nenhum estudante cadastrado"
        : `Total de estudante cadastrados: ${student.length}`,
        students,
    });
    });


export default studentsRoutes;