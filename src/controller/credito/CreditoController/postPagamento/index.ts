import { Request, Response, response } from 'express';
import credentials from '../../../../certificate/credentials';
import Gerencianet from 'gn-api-sdk-typescript';
import { PutRequest } from '../../../../lib/request';

export const PostPagamento = async (req: Request, res: Response) => {
  const data = req.body;
  console.log("🚀 ~ file: index.ts:8 ~ PostPagamento ~ data:", data)

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
      let respostaUpdate;
      (async()=> {
        try {
          const cron = new Date().toISOString()
          const dataupdate = {
            estatos_pgto: 'Pago',
            pgto_efi: 'Pago Efi Credito',
            formapgto: 'CT CREDITO',
            venda: `${data.pagamentos}x`,
            Datepagmento: cron
          }
          const url = `/save/${data.id}`;
          const responsePut = await PutRequest(url,dataupdate)
          const retorno = responsePut.data;
          respostaUpdate = retorno;
        } catch (error) {
          console.log(error);
          const erro ={
            error: error.response.data
          }
          respostaUpdate = erro
        }
      })()
      
      const resp = {
        api :resposta.data,
        server: respostaUpdate
      }
      res.status(200).json(resp);
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
