import express from "express";
import connectDatabase from "./config/dbConnect.js";
import livro from "./models/livro.js";

const conexao = await connectDatabase();

conexao.on("error", (error) => {
  console.error("erro de conexao", erro)
});

conexao.once("open", () => {
  console.log('conexao com banco feita com sucesso!')
});

const app = express(); //importando todo conjunto do express para esta variavel app
app.use(express.json()); // middleware -- pode modificar um objeto
    //os dados do req chegam como string


app.get("/", (req, res) => {

  res.status(200).send("rodando express");
});

app.get("/livros", async (req, res) => {
  const listaLivros = await livro.find({});
  res.status(200).json(listaLivros);
});

app.put('/livros/:id', (req, res) => {
  const index = buscaLivro(req.params.id);
  livros[index].titulo = req.body.titulo;
  res.status(200).json(livros)
})

app.post('/livros', (req, res) => {
  livros.push(req.body);
  res.status(201).send('livro cadastrado com sucesso')
})

app.delete("/livros/:id", (req, res) => {
    const index = buscaLivro(req.params.id);
        livros.splice(index, 1);
        res.status(200).json(livros).send("livro Deletado")
})
export default app;



