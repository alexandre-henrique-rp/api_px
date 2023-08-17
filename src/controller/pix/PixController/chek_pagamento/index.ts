import { Request, Response } from 'express';
import { GetRequest } from '../../../../lib/request';
import { CONCLUIDO } from './process/concluido';
import { ATIVO } from './process/ativo';



const LISTA: any[] = [];

export const PgConcluido = async (req: Request, res: Response) => {
  try {
    const inicio = req.query.Inicio;
    const fim = req.query.Fim;

    const url_get_lista_efi = `/get/lista/efi?Inicio=${inicio}&Fim=${fim}`

    const lista_efi = await GetRequest(url_get_lista_efi)

    const Concluido = await CONCLUIDO(lista_efi)
    const listaConcluida = await Promise.all(Concluido)

    const Ativo = await ATIVO(lista_efi)
    const listaAtivo = await Promise.all(Ativo)
    

    console.log("🚀 ~ file: index.ts:19 ~ PgConcluido ~ Concluido:", listaAtivo)
    

   

    res.json(lista_efi);
  } catch (error) {
    res.status(400).send(error);
  }
};
