
📝 Lista de Afazeres (To-Do List) com Express e SQLite

Um projeto simples de lista de afazeres (to-do list) desenvolvido com Node.js, Express e SQLite. O objetivo é permitir que o usuário cadastre, visualize e remova tarefas de forma prática via API e frontend básico.

🚀 Tecnologias usadas

Node.js

Express

SQLite

📂 Estrutura de pastas
├── public/             # arquivos estáticos (HTML, CSS, JS do frontend)
│   ├── index.html
│   ├── style.css
│   └── script.js
├── server.js           # servidor Express
├── database.sqlite     # banco de dados local (não versionado no Git)
├── package.json
├── package-lock.json
└── .gitignore

⚙️ Configuração do projeto

Clone este repositório:

git clone https://github.com/seu-usuario/nome-do-repo.git
cd nome-do-repo


Instale as dependências:

npm install


Configure o banco de dados: o servidor cria automaticamente a tabela se ela não existir. Exemplo de criação de tabela em server.js:

db.run(`CREATE TABLE IF NOT EXISTS tarefas (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  descricao TEXT NOT NULL
)`);


Inicie o servidor:

node server.js


O servidor ficará disponível em http://localhost:3928
Este projeto está sob a licença MIT. Você pode usá-lo livremente, modificar e distribuir.
GET /tarefas
Retorna todas as tarefas cadastradas. Exemplo de resposta:
