// carregando modules
const express = require('express')
const handlebars = require('express-handlebars');
const app = express()
const PORT = 8050

//config
app.engine('handlebars', handlebars({ defaultLayout: 'main' }));

app.set('view engine', 'handlebars');

// rotas
app.get('/', (req, res) => res.render('principal'))
app.get('/cad', (req, res) => res.render('cadastro'))
app.post('/cadastrado', (req, res) => res.send('Cadastrado com sucesso'))

// rodando servidor
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`))