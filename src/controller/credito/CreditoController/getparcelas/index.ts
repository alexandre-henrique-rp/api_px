import Gerencianet from 'gn-api-sdk-typescript';
import { Request, Response } from 'express';
import credentials from '../../../../certificate/credentials';

export const GetParcelas = async (req: Request, res: Response) => {
  const options = {
    client_id: credentials.client_id,
    client_secret: credentials.client_secret,
    sandbox: true
  };
  
  const params = {
    brand: 'visa',
    total: 5000
  };
  
  const gerencianet = new Gerencianet(options);
  
  gerencianet
    .getInstallments(params)
    .then((resposta: any) => {
      console.log(resposta)
      res.status(200).json(resposta);
    })
    .catch((err: any) =>{
      console.log(err)
      res.status(400).json(err)
    });
};

