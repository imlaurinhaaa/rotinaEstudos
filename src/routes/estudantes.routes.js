import { Router } from "express";
import StudentRepository from "../models/users/StudentRepository.js";

const studentsRoutes = Router();
const studentsList = new StudentRepository();

studentsRoutes.get("/", (req, res) => {
  const students = studentsList.getAllStudents();
  return res.status(200).json({
    message:
      students.length == 0
        ? "Nenhum estudante cadastrado"
        : `Total de estudante cadastrados: ${student.length}`,
    students,
  });
});

studentsRoutes.post("/", (req, res) => {
  const { materia, progresso, objetivos, dificuldade } = req.body;

  const students = studentsList.addStudent(
    materia,
    progresso,
    objetivos,
    dificuldade
  );

  if (!materia || !progresso) {
    return res.status(400).json({
        message: "Os campos materia e progresso são obrigatórios",
        students,
    });
    }

    if (!objetivos || objetivos.length < 2) {
        return res.status(400).json({
            message: "O campo objetivos deve conter no mínimo 2 objetivos",
            students,
        });
    }

    if (dificuldade != "Fácil" && dificuldade != "Médio" && dificuldade != "Difícil") {
        return res.status(400).json({
            message: "O campo dificuldade deve ser Fácil, Médio ou Difícil",
            students,
        });
  }

  return res.status(201).json({
    message: "Estudante cadastrado com sucesso!",
    students,
  });
});

export default studentsRoutes;
