const express = require('express');
const bodyParser = require('body-parser');
const {Pool} = require('pg');

const app = express();
const porta = 3000;

const banco = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: 'postgres',
    port: 5432
});

app.use(bodyParser.json());

app.get('/tarefas', async (requisicao, resposta) => {
    try{
        const {rows} = await banco.query('SELECT * FROM tarefas');
       
        resposta.json(rows);
    }
    catch(error){
        resposta.status(500).json({error: 'Erro ao buscar todas as tarefas', mensagem: error});
    }
});

app.post('/tarefas', async (requisicao, resposta) => {
    const {descricao} = requisicao.body;

    if(!descricao){
        return resposta.status(400).json({error: 'A descrição da tarefa é obrigatoria'});
    }
    try{
        await banco.query('INSERT INTO tarefas (descricao) VALUES ($1) RETURNING *', [descricao]);

        resposta.status(200).json({mensagem: 'Tarefa criada com sucesso'});
    }
    catch(error){
        resposta.status(500).json({error: 'Erro ao criar a tarefa'});
    }
});

app.listen(porta, () => {
    console.log('A API está rodando na porta http://localhost:3000/');
})

