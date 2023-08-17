import { Request, Response } from 'express';
import { Op } from 'sequelize';
import { Fcweb } from '../../../../db/table/fcweb';


export const GetCliente = async (req: Request, res: Response) => {
  await Fcweb.findOne({
    where: {
      txid: {
        [Op.like]: req.params.txid,
      },
      estatos_pgto: {
        [Op.ne]: 'Pago',
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
