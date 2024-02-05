import express from "express";
import livros from "./livrosRoutes.js";

const routes = (app) => {
    app.route("/").get((req, res) => res.status(200).send('curso de nodejs'))
    app.use(express.json(), livros); // middleware -- pode modificar um objeto
    //os dados do req chegam como string
}

export default routes;
