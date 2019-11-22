// carregando modules
const express = require('express')
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser')
const app = express()
const PORT = 8050

//config
 //handlebars
    app.engine('handlebars', handlebars({ defaultLayout: 'main' }));
    app.set('view engine', 'handlebars');
 //bodyparser
    app.use(bodyParser.urlencoded({ extended: true }))
    app.use(bodyParser.json())

// rotas
app.get('/', (req, res) => res.render('principal'))
app.get('/cad', (req, res) => res.render('cadastro'))
app.post('/cadastrado',(req,res)=> res.send(
   [req.body.nome,req.body.sobrenome]
))


// rodando servidor
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`))