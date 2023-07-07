import { DataTypes } from 'sequelize';
import  DataBese from '../db';


export const Fcweb: any = DataBese.define(
  'fcweb',
  {
    //nome da tabela a ser conectada
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    s_alerta: DataTypes.TEXT,
    referencia: DataTypes.TEXT,
    id_boleto: DataTypes.TEXT,
    id_cancelar_bol_rem: DataTypes.TEXT,
    unidade: DataTypes.TEXT,
    responsavel: DataTypes.TEXT,
    andamento: DataTypes.TEXT,
    prioridade: DataTypes.TEXT,
    solicitacao: DataTypes.TEXT,
    venda: DataTypes.TEXT,
    cpf: DataTypes.TEXT,
    cnpj: DataTypes.TEXT,
    nome: DataTypes.TEXT,
    razaosocial: DataTypes.TEXT,
    vectoboleto: DataTypes.TEXT,
    unico: DataTypes.TEXT,
    contador: DataTypes.TEXT,
    obscont: DataTypes.TEXT,
    comissaoparceiro: DataTypes.FLOAT,
    scp: DataTypes.STRING(10),
    tipocd: DataTypes.TEXT,
    valorcd: DataTypes.TEXT,
    estatos_pgto: DataTypes.TEXT,
    formapgto: DataTypes.TEXT,
    vouchersoluti: DataTypes.TEXT,
    ct_parcela: DataTypes.TEXT,
    telefone: DataTypes.TEXT,
    telefone2: DataTypes.TEXT,
    email: DataTypes.TEXT,
    dtnascimento: DataTypes.TEXT,
    rg: DataTypes.TEXT,
    cei: DataTypes.TEXT,
    endereco: DataTypes.TEXT,
    nrua: DataTypes.TEXT,
    bairro: DataTypes.TEXT,
    complemento: DataTypes.TEXT,
    cep: DataTypes.TEXT,
    uf: DataTypes.TEXT,
    cidade: DataTypes.TEXT,
    observacao: DataTypes.TEXT,
    vctoCD: DataTypes.DATE,
    historico: DataTypes.TEXT,
    arquivo: DataTypes.STRING(100),
    nomearquivo: DataTypes.STRING(100),
    obsrenovacao: DataTypes.TEXT,
    dt_aprovacao: DataTypes.DATE,
    comicao: DataTypes.FLOAT,
    validacao: DataTypes.TEXT,
    nfe: DataTypes.TEXT,
    urlnota: DataTypes.TEXT,
    id_fcw_soluti: DataTypes.STRING(10),
    dt_agenda: DataTypes.DATE,
    hr_agenda: DataTypes.TIME,
    obs_agenda: DataTypes.TEXT,
    reg_cnh: DataTypes.TEXT,
    custoCdpar: DataTypes.TEXT,
    custocd: DataTypes.TEXT,
    createdAt: DataTypes.DATE,
    smspg: DataTypes.INTEGER,
    txid : DataTypes.TEXT,
    qrcodeLink : DataTypes.TEXT,
    CreatePixDate: DataTypes.DATE ,
    ConclusionPixDate: DataTypes.DATE,
    Datepagmento: DataTypes.DATE,
    telPix:DataTypes.TEXT,
    emailPix:DataTypes.TEXT,
    pgto_efi:DataTypes.TEXT,
    imgCode:DataTypes.TEXT,
  },
  { freezeTableName: true },
); // função para conectar tebela ja criada

//criar ou sicronizar a tabela
// Cliente.sync();

