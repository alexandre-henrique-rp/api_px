import { DataTypes } from 'sequelize';
import DataBese from '../db';
import { Fcweb } from './fcweb';

const PgAberto = DataBese.define(
  'PgAberto',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    nome: DataTypes.STRING,
    razao: DataTypes.STRING,
    cnpj: DataTypes.STRING,
    cpf: DataTypes.STRING,
    txid: DataTypes.STRING,
    status: DataTypes.STRING,
    msg: DataTypes.INTEGER,
    statusPg: DataTypes.STRING,
    data_pagamento: DataTypes.DATE,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  },
  { freezeTableName: true }
);

// Defina a coluna virtual cliente
PgAberto.addHook('afterFind', async (pgAberto: any) => {
  const fcwebs = await Fcweb.findAll({ where: { PgAbertoId: pgAberto.id } });
  pgAberto.setDataValue('cliente', fcwebs);
});

export { PgAberto };


