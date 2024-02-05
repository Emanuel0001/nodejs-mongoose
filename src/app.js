import express from "express";
import connectDatabase from "./config/dbConnect.js";
import routes from "./routes/index.js";

const conexao = await connectDatabase();

conexao.on("error", (error) => {
  console.error("erro de conexao", erro)
});

conexao.once("open", () => {
  console.log('conexao com banco feita com sucesso!')
});

const app = express(); //importando todo conjunto do express para esta variavel app
routes(app);

app.put('/livros/:id', (req, res) => {
  const index = buscaLivro(req.params.id);
  livros[index].titulo = req.body.titulo;
  res.status(200).json(livros)
})

app.post('/livros', (req, res) => {
 
})

app.delete("/livros/:id", (req, res) => {
    const index = buscaLivro(req.params.id);
        livros.splice(index, 1);
        res.status(200).json(livros).send("livro Deletado")
})
export default app;



