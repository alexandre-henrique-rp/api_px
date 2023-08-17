import express from 'express';
import ListController from '../controller/lista';


export const ListaRouter = express.Router();


ListaRouter.get('/get/lista/efi', ListController.GetListaEfi);
ListaRouter.get('/get/lista/cliente/:txid', ListController.GetCliente);
ListaRouter.get('/get/ativo/:txid', ListController.GetLista);
ListaRouter.post('/post/lista/ativo', ListController.AddCliente);
ListaRouter.put('/update/lista/:id', ListController.UpdateLista);
ListaRouter.put('/remove/pix', ListController.AddCliente);


// id 21169