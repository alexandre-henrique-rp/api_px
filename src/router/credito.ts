import express from 'express';
import CreditoController from '../controller/credito';


export const CreditoRouter = express.Router();

//pix
//------------------------------------------------------------------------------

CreditoRouter.post('/credito/get/parcelas', CreditoController.GetParcelas);
CreditoRouter.post('/credito/get/token', CreditoController.TokemCredito);
CreditoRouter.post('/credito/post/pagamento', CreditoController.PostPagamento);

