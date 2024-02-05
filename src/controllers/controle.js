import livro from "../models/livro.js";

class livroController {
    
  static async listaLivros(req, res) {
    const listaLivros = await livro.find({});
    res.status(200).json(listaLivros);
  }

  static async cadastrarLivro(req, res) {
    try {
      const novoLivro = await livro.create(req.body);
      res.status(201).json({ message: "criado com sucesso", livro: novoLivro });
    } catch (error) {
      res
        .status(500)
        .json({ message: `${erro.message} - falha ao cadastrar livro` });
    }
  }
}

export default livroController;
