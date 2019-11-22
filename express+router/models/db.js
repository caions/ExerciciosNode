//carregando modulos
const Sequelize = require('sequelize');

//configurando ao database
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
    console.error('Erro ao se conectar no banco de dados', erro);
  });

//definindo a tabela
const Estudante = sequelize.define('estudantes',({
    nome:{
        type: Sequelize.STRING,
        validate:{
            notEmpty: true
        }
    }
}))
/*
//sincronizando a tabela com o banco de dados
Estudante.sync({force:true})
.then(()=>console.log('Tabela criada com sucesso!'))
.catch(erro => console.log('Erro ao criar a tabela ',erro))


//adicionando um estudante na tabela
Estudante.create({
    nome: 'Caio Nascimento'
})
.then(()=>console.log('Estudante adicionado com sucesso!'))
.catch(erro => console.log('Erro ao adicionar o estudante  ',erro))

//deletar o module
//Estundante.drop()
*/
module.exports = Estudante