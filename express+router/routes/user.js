const express = require('express')
const router = express.Router()

router.get('/',(req,res)=> res.send('Essa é a rota principal de Usuario'))
router.get('/sec',(req,res)=> res.send('Essa é a rota secundaria de Usuario'))

module.exports = router;