import { Request, Response } from 'express';
import getPaymentToken from './lib';
import { DataCredito } from '../../../../types/dataCredito';

export const TokemCredito = async (req: Request, res: Response) => {
  const data: DataCredito = req.body
  console.log("🚀 ~ file: index.ts:7 ~ TokemCredito ~ data:", data)
  try {
    const pay_token = process.env.PAYMENT_USER_TOKEN;
    const cardData = {
      brand: data.brand,
      number: data.number,
      cvv: data.cvv,
      expiration_month: data.expiration_month,
      expiration_year: data.expiration_year,
      reuse: data.reuse
    };
    const request = await getPaymentToken(pay_token, cardData);
    const resposta = JSON.parse(request)

    res.status(200).json(resposta);
  } catch (error: any) {
    console.log(error);
    res.status(400).json(error);
  }
};
