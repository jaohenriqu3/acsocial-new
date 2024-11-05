require('dotenv').config();
const http = require('http');
const mysql = require('mysql2');

// Configuração 
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  port: process.env.DB_PORT || 3306
});

db.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
    return;
  }
  console.log('Conexão bem-sucedida');
});

// Manipular requisições
const handleRequest = (req, res) => {
  if (req.method === 'POST' && req.url === '/dados-formulario') {
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString();
    });
    req.on('end', () => {
      const dados = JSON.parse(body);
      const { 
        nome, sobrenome, nacionalidade, estadoCivil, profissao, cpf, rg, 
        cep, endereco, numero, complemento, estado, cidade, bairro 
      } = dados;

      const query = `
        INSERT INTO usuarios 
        (nome, sobrenome, nacionalidade, estadoCivil, profissao, cpf, rg, 
         cep, endereco, numero, complemento, estado, cidade, bairro) 
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      `;
      const values = [
        nome, sobrenome, nacionalidade, estadoCivil, profissao, cpf, rg, 
        cep, endereco, numero, complemento, estado, cidade, bairro
      ];

      db.query(query, values, (err, result) => {
        if (err) {
          console.error('Erro ao inserir dados:', err);
          res.writeHead(500, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ message: 'Erro ao gravar dados no banco' }));
        } else {
          res.writeHead(200, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ message: 'Dados inseridos com sucesso!' }));
        }
      });
    });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Rota não encontrada');
  }
};

// Inicialização do servidor
const server = http.createServer(handleRequest);

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
