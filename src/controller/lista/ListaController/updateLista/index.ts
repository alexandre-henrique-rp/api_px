import { Request, Response } from 'express';
import { PgAberto } from '../../../../db/table/statuspg';


export const UpdateLista = async (req: Request, res: Response) => {
  var dados = req.body;
  await PgAberto.update(dados, {
    where: {
      id: req.params.id,
    },
  })
    .then((resp: any) => {
      return res.status(201).json({
        message: 'Dados atualizado com sucesso!',
        data: resp.data
      });
    })
    .catch((err: any) => {
      return res.status(400).json({
        message: 'Erro: Não foi possível atualizar os dados!',
        data: err.original
      });
    });
};
