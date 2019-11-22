const Sequelize = require('sequelize');

const sequelize = new Sequelize('teste', 'root', '123456', {
  host: 'localhost',
  dialect: 'mysql'
});

//testando a conexao
sequelize
  .authenticate()
  .then(() => {
    console.log('Conectado ao banco de dados com sucesso');
  })
  .catch(erro => {
    console.error('Falha ao se conectar com o baco de dados: ', erro);
  });

//Definindo um model
const Usuario = sequelize.define('usuarios',{
    nome:{
        type: Sequelize.STRING,
        validate:{
            notEmpty: true,
        }
    },
    sobrenome:{
        type: Sequelize.STRING,
        validate:{
            notEmpty: true,       
        }
    }
})

// sincronizando um model com o banco de dados
/*
Usuario.sync({force:true})
.then(()=>console.log('Model criado com sucesso!'))
.catch((erro)=> console.log('Erro ao criar o model: '+erro))
*/

// criando um usuario

Usuario.create({
    nome: 'Caio',
    sobrenome: 'Nascimento'
})
.then(()=> console.log('Usuario criado com sucesso'))
.catch((erro)=>console.log('Erro ao criar um usuario: '+erro))
