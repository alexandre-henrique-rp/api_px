import { Request, Response } from 'express';
import { Op } from 'sequelize';
import { PgAberto } from '../../../../db/table/statuspg';


export const GetLista = async (req: Request, res: Response) => {
  await PgAberto.findOne({
    where: {
      txid: {
        [Op.like]: req.params.txid,
      },
    },
  })
  .then((response: any) => {
    res.status(200).json(response);
  })
  .catch((err: any) => {
    res.status(400).json(err);
  });
};
