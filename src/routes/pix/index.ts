import express from 'express';

export const PixRouter = express.Router();

//pix
//------------------------------------------------------------------------------

PixRouter.post('/create/payment', PixController.PgPagamento);
PixRouter.post('/check/payment/:id', PixController.VerifyPagamento);
PixRouter.put('/save/:id', PixController.DataSave);
PixRouter.get('/get/:id', PixController.Get);