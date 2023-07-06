import { CreatePg } from "./PixController/create/create"
import { QrCod } from "./PixController/createQrcod"
import { Get } from "./PixController/getDados"
import { DataSave } from "./PixController/savedata"
import { VerifyPagamento } from "./PixController/verify"

const PixController = {
    VerifyPagamento,
    DataSave,
    Get,
    CreatePg,
    QrCod,
}

export default PixController