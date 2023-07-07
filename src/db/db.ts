import { Sequelize } from 'sequelize';

const DataBese = new Sequelize(
  'redebrasilrp',
  'redebrasilrp',
  'rbrp2017',
  {
    host: 'mysql.redebrasilrp.com.br',
    dialect: 'mysql',
    dialectOptions: {
      connectTimeout: 60000, // 60 segundos
      SequelizeConnection: true,
      
    },
  },
);

DataBese.authenticate()
  .then(() => {
    console.log('👍👍 Conexão com o banco de dados foi estabelecida com sucesso! 👍👍');
  })
  .catch((err) => {
    console.error('👎👎 Erro: Conexão com o banco de dados não realizada:', err);
  });

export default DataBese;
