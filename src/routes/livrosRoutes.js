import express from "express";
import livroController from "../controllers/controle.js";


const routes = express.Router();

routes.get("/livros", livroController.listaLivros);

routes.post("/livros", livroController.cadastrarLivro);

export default routes;