import cors from "cors";
import express from "express";
import sqlite3 from "sqlite3";

const app = express();
const db = new sqlite3.Database("./database.sqlite");
const porta = 3928;

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

db.run(
  `CREATE TABLE IF NOT EXISTS tabela (id INTEGER PRIMARY KEY AUTOINCREMENT, frase TEXT)`
);

app.post("/tarefas", (req, res) => {
  const frase = req.body?.frase;
  db.run("INSERT INTO tabela (frase) VALUES (?) ", [frase], (err) => {
    err
      ? res.status(500).json({ error: "Erro ao inserir dado" })
      : res.json({ message: "Dado inserido com sucesso!" });
  });
});

app.get("/tarefas", (req, res) => {
  db.all("SELECT * from tabela", (err, rows) => {
    err
      ? res.status(500).json({ error: "Erro ao pegar dado" })
      : res.json(rows);
  });
});

app.delete("/tarefas/:id", (req, res) => {
  const { id } = req.params;
  db.run("DELETE FROM tabela WHERE id = ?", [id], (err) => {
    err
      ? res.status(500).json({ error: "Erro ao deletar dado" })
      : res.json({ message: "Dado deletado com sucesso!" });
  });
});

app.listen(porta, () => {
  return console.log(`Servidor rodando corretamente na porta ${porta}!`);
});
