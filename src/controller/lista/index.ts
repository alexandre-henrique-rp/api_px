import { AddCliente } from "./ListaController/addLista";
import { GetCliente } from "./ListaController/getCliente";
import { GetLista } from "./ListaController/getLista";
import { GetListaEfi } from "./ListaController/getListaEfi";
import { UpdateLista } from "./ListaController/updateLista";


const ListController = {
  GetListaEfi,
  GetLista,
  GetCliente,
  AddCliente,
  UpdateLista
}

export default ListController;