import { Request, Response } from 'express';
import { PgAberto } from '../../../../db/table/statuspg';


export const AddCliente = async (req: Request, res: Response) => {
  const dados = req.body;

  await PgAberto.create(dados)
  .then((response: any) => {
    res.status(200).json(response);
  })
  .catch((err: any) => {
    res.status(400).json(err);
  });
};
