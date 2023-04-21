import express, { json } from 'express';
import cors from 'cors'


const app = express();
app.use(json());
app.use(cors());



app.listen(process.env.PORT || 3050, async function () {
  // await DataBese.sync(); // sinconizar bamco de dados
  console.log('🚀🚀🤖 servidor em execução 🤖🚀🚀')
  console.log(`🚀🚀🤖 ${process.env.SERVE_CONSULT} 🤖🚀🚀`)
});
