// carregando modules
const app = require('./models/server')
const estudante = require('./models/db')
const adm = require('./routes/admin')
const user = require('./routes/user')
// rotas
 // admin
app.use('/adm',adm)
app.use('/user',user)

