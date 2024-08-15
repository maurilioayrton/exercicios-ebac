const express = require('express');
const app = express();
const port = 3000;

// Middleware para parsear o corpo das requisições como JSON
app.use(express.json());

// Simulação de banco de dados com uma lista de tarefas
let tarefas = [
    { id: 1, descricao: 'Aprender Node.js' },
    { id: 2, descricao: 'Construir uma API' },
    { id: 3, descricao: 'Testar endpoints' }
];

// Rota GET para listar todas as tarefas
app.get('/tarefas', (req, res) => {
    res.json(tarefas);
});

// Rota GET para obter uma tarefa por ID
app.get('/tarefas/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const tarefa = tarefas.find(t => t.id === id);
    if (tarefa) {
        res.json(tarefa);
    } else {
        res.status(404).json({ message: 'Tarefa não encontrada' });
    }
});

// Rota POST para criar uma nova tarefa
app.post('/tarefas', (req, res) => {
    const novaTarefa = {
        id: tarefas.length + 1,
        descricao: req.body.descricao
    };
    tarefas.push(novaTarefa);
    res.status(201).json(novaTarefa);
});

// Rota PUT para atualizar uma tarefa por ID
app.put('/tarefas/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const tarefa = tarefas.find(t => t.id === id);
    if (tarefa) {
        tarefa.descricao = req.body.descricao;
        res.json(tarefa);
    } else {
        res.status(404).json({ message: 'Tarefa não encontrada' });
    }
});

// Rota DELETE para deletar uma tarefa por ID
app.delete('/tarefas/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = tarefas.findIndex(t => t.id === id);
    if (index !== -1) {
        const tarefaDeletada = tarefas.splice(index, 1);
        res.json(tarefaDeletada);
    } else {
        res.status(404).json({ message: 'Tarefa não encontrada' });
    }
});

// Inicia o servidor na porta especificada
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
