import { Request, Response } from 'express';
import { Op } from 'sequelize';
import { Fcweb } from '../../../../db/table/fcweb';

export const DeletePix = async (req: Request, res: Response) => {
  const Dados = {
    ConclusionPixDate: new Date().toISOString(),
    estatos_pgto: '',
    historico: req.body,
  };
  
  await Fcweb.update(Dados,{
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
