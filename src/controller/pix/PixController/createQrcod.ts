import Gerencianet from 'gn-api-sdk-typescript';
import options from './create/credentials';
import { Request, Response } from 'express';
import { PutRequest } from '../../../lib/request';

export const QrCod = async (req: Request, res: Response) => {
  const {cliente} = req.query
  const Id = req.params.id;
  let params = {
    id: Id,
  };

  const gerencianet = new Gerencianet(options);

  gerencianet
    .pixGenerateQRCode(params)
    .then(async(resposta: any) => {
      const data = {
        pgto_efi: 'Em Aberto',
        qrcodeLink: resposta.qrcode,
        imgCode: resposta.imagemQrcode
      };
      const url = `/save/${cliente}`;
      const update = await PutRequest(url, data);
      console.log(update);

      console.log(resposta);
      res.status(200).send(resposta);
    })
    .catch((error: any) => {
      console.log(error);
      res.status(500).send(error);
    });
};
