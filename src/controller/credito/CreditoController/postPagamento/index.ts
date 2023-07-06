import { Request, Response } from 'express';
import credentials from '../../../../certificate/credentials';
import Gerencianet from 'gn-api-sdk-typescript';

export const PostPagamento = async (req: Request, res: Response) => {
  const data = req.body;

  var options = {
    client_id: credentials.client_id,
    client_secret: credentials.client_secret,
    sandbox: true,
  };

  var body = {
    payment: {
      credit_card: {
        installments: data.pagamentos,
        payment_token: data.token,
        billing_address: {
          street: process.env.END,
          number: process.env.NUMERO,
          neighborhood: process.env.BAIRRO,
          zipcode: process.env.CEP,
          city: process.env.CIDADE,
          state: process.env.UF,
        },
        customer: data.cpf
          ? {
              name: data.nome,
              email: data.email,
              cpf: data.cpf,
              birth: data.nascimento,
              phone_number: data.fone,
            }
          : {
              corporate_name: data.razao,
              email: data.email,
              cnpj: data.cnpj,
              birth: data.nascimento,
              phone_number: data.fone,
            },
      },
    },

    items: [
      {
        name: data.produto,
        value: data.valor,
        amount: data.quantidade,
      },
    ],
    shippings: [
      {
        name: data.produto,
        value: 0,
      },
    ],
  };

  var gerencianet = new Gerencianet(options);

  gerencianet
    .createOneStepCharge([], body)
    .then((resposta: any) => {
      console.log(resposta);
      res.status(200).json(resposta.data);
    })
    .catch((erro: any) => {
      console.log(erro);
      res.status(400).json(erro);
    });
};

// {
//  token: 'string'; //token de pagamento
//  nome: 'string'; // nome do cliente
//  email: 'string'; //email do cliente
//  cpf: 'string';  // cpf do cliente
//  cnpj: 'string'; // cnpj do cliente
//  razao: 'string'; // razão social do cliente
//  nascimento: 'string'; // dada de nascimento do cliente
//  fone: 'string'; // telefone do cliente
//  produto: 'string'; // nome do produto
//  valor: 'nunber'; // valor do produto
//  quantidade: 'nunber'; // quantidade do produto
//  pagamentos: 'nunber'; //vezes de pagamento
// }