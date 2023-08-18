import { GetRequest, PutRequest } from '../../../../../lib/request';

export const CONCLUIDO = async (lista: any) =>
  await Promise.all(
    lista
      .filter((l: any) => l.status === 'CONCLUIDA')
      .map(async (i: any) => {
        //verificar se não esta atualizado para pago

        const url = `/get/lista/cliente/${i.txid}`;
        const clientePg = await GetRequest(url);

        const urlVerifique = `/get/ativo/${i.txid}`;
        const Verifique = await GetRequest(urlVerifique);

        const AtualData = new Date()
        .toLocaleString()
        .replace(/\//g, '-')
        .replace(/, /g, '.');
      const novoHistorico = `${AtualData}-CLIENTE EFETUOU PAGAMENTO NA DATA ${i.data_pagamento}\n`;

        if (clientePg) {
          if (Verifique) {
            const dados = {
              statusPg: 'pg',
              data_pagamento: i.data_pagamento,
              status: i.status,
            };
            const urlLista = `/update/lista/${Verifique.id}`;
            await PutRequest(urlLista, dados);

            const data = {
              observacao: `${clientePg.observacao}\n ${novoHistorico}`,
              historico: `${clientePg.historico}${novoHistorico}`,
              ConclusionPixDate: i.data_pagamento,
              estatos_pgto: 'Pago',
              pgto_efi: 'Pago Efi Pix',
            };
            console.log("🚀 ~ file: concluido.ts:39 ~ .map ~ data:", data)
            const url = `/save/${clientePg.id}`;
            const update = await PutRequest(url, data);
            return update.message;
          } else {
            const data = {
              observacao: `${clientePg.observacao}\n ${novoHistorico}`,
              historico: `${clientePg.historico}${novoHistorico}`,
              ConclusionPixDate: i.data_pagamento,
              estatos_pgto: 'Pago',
              pgto_efi: 'Pago Efi Pix',
            };
            const url = `/save/${clientePg.id}`;
            const update = await PutRequest(url, data);
            return update.message;
          }
        }

        return 'O pagamento já foi registrado';
      }),
  );
