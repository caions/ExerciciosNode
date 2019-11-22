// carregando modules
const express = require('express')
const app = express()
const PORT = 8050

// rotas
app.get('/', (req, res) => res.send('Rota Principal'))
app.get('/cad', (req, res) => res.send('Rota de cadastro'))


// rodando servidor
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`))