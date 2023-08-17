import { Request, Response } from 'express';
import Gerencianet from 'gn-api-sdk-typescript';
import options from '../../../pix/PixController/create/credentials';

export const GetListaEfi = async (req: Request, res: Response) => {
  const inicio = req.query.Inicio;
  const fim = req.query.Fim;

  const params = {
    inicio,
    fim,
    'paginacao.itensPorPagina': 500,
  };

  const gerencianet = new Gerencianet(options);

  gerencianet
    .pixListCharges(params)
    .then((resposta: any) => {
      const listaCobrancas = resposta.cobs.map((cobranca: any) => {
        const dataPagamento = cobranca.pix && cobranca.pix.length > 0 ? cobranca.pix[0].horario : null;
        return {
          txid: cobranca.txid,
          status: cobranca.status,
          nome: cobranca.devedor.nome,
          cpf: cobranca.devedor.cpf,
          valor: cobranca.valor.original,
          data_pagamento: dataPagamento,
          data_inicio_pagamento: cobranca.calendario.criacao,
        };
      });

      res.json(listaCobrancas);
    })
    .catch((error: Promise<any>) => {
      console.log(error);
    });
};
