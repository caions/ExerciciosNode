//carregando modules
const express = require('express')
const app = express()
const PORT = 8050

// rodando servidor
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`))

//exportando app
module.exports = app