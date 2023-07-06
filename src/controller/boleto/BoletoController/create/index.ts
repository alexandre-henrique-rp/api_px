import Gerencianet from "gn-api-sdk-typescript";

var clientId = 'your_client_id';
var clientSecret = 'your_client_secret';
 
var options = {
  client_id: clientId,
  client_secret: clientSecret,
  sandbox: true
}

var body = {

  payment: {
    banking_billet: {
      expire_at: '2020-06-12', 
      customer: {
        name: 'Gorbadoc Oldbuck',
        email: 'oldbuck@gerencianet.com.br',
        cpf: '04267484171', 
        birth: '2020-06-10', 
        phone_number: '5144916523' ,
        juridical_person: {
          corporate_name: 'Empresa Gorbadoc',
          cnpj:'92247037000137'
        }
      }
    }
  },

  items: [{
    name: 'Product 1',
    value: 1000,
    amount: 2
  }],
  shippings: [{
    name: 'Default Shipping Cost',
    value: 100
  }]
}

var gerencianet = new Gerencianet(options);

gerencianet
  .oneStep([], body)
  .then(console.log)
  .catch(console.log)
  .done();
