const express = require('express')
const router = express.Router()

router.get('/',(req,res)=> res.send('Essa é a rota principal de Adm'))
router.get('/sec',(req,res)=> res.send('Essa é a rota secundaria de Adm'))

module.exports = router;