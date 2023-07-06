import { TokemCredito } from "./CreditoController/getToken";
import { GetParcelas } from "./CreditoController/getparcelas";
import { PostPagamento } from "./CreditoController/postPagamento";


const CreditoController = {
  GetParcelas,
  TokemCredito,
  PostPagamento
}

export default CreditoController;