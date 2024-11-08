import { Router } from "express";

// Lista de importação das rotas do projeto
import studentsRoutes from "./estudantes.routes.js";

const routes = Router();

// Rota raiz para teste
routes.get("/", (req, res) => {
  return res.status(200).json({ message: "Servidor rodando com sucesso!" });
});

// Lista de uso das rotas do projeto
routes.use("/students", studentsRoutes);

export default routes;