import express, { json } from 'express';
import cors from 'cors'
import { PixRouter } from './router/pix';
import { CreditoRouter } from './router/credito';
import { ListaRouter } from './router/lista';


const app = express();
app.use(json());
app.use(cors());
app.use(PixRouter);
app.use(CreditoRouter);
app.use(ListaRouter);


app.listen(3060, async function () {
 
  console.log('🚀🚀🤖 servidor em execução 🤖🚀🚀')
  console.log(`🚀🚀🤖 ${process.env.SERVE_CONSULT} 🤖🚀🚀`)
});

//payment.redebrasilrp.com.br