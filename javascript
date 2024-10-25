const express = require('express');
const app = express();
const port = 3000;

// Servir arquivos estáticos
app.use(express.static('public'));

// Rota para a página inicial
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

// Rota para a página de serviços
app.get('/servicos', (req, res) => {
  res.sendFile(__dirname + '/public/servicos.html');
});

// Rota para a página sobre
app.get('/sobre', (req, res) => {
  res.sendFile(__dirname + '/public/sobre.html');
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
