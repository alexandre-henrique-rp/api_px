import { GetRequest, PostRequest, PutRequest } from '../../../../../lib/request';
import { WhatsAppSms } from '../../../../../lib/sendSms';

export const ATIVO = async (lista: any) =>
  await Promise.all(
    lista
      .filter((l: any) => l.status !== 'CONCLUIDA')
      .map(async (i: any) => {
        //verificar se não esta atualizado para pago

        const urlclientePg = `/get/lista/cliente/${i.txid}`;
        const clientePg = await GetRequest(urlclientePg);
        console.log('🚀 ~ file: ativo.ts:12 ~ .map ~ clientePg:', clientePg);

        const urlVerifique = `/get/ativo/${i.txid}`;
        const Verifique = await GetRequest(urlVerifique);

        const AtualData = new Date()
          .toLocaleString()
          .replace(/\//g, '-')
          .replace(/, /g, '.');
        const novoHistorico2 = `${AtualData}-JÁ FORAM FEITA MAIS DE UM CONTATO\n`;
        const novoHistorico = `${AtualData}-PRIMEIRO CONTATO FEITO VIA WHATSAPP\n`;

        if (clientePg) {
          if (Verifique) {
            const data = {
              observacao: `${clientePg.observacao}\n ${novoHistorico2}`,
              historico: `${clientePg.historico}${novoHistorico2}`,
            };
            const url = `/save/${clientePg.id}`;
            const update = await PutRequest(url, data);
            const dados = {
              msg: parseInt(Verifique.msg) + 1,
            };
            const urlLista = `/update/lista/${Verifique.id}`;
            const updateLista = await PutRequest(urlLista, dados);

            const msg = `Ola ${
              !clientePg.razaosocial ? clientePg.nome : clientePg.razaosocial
            } tudo bem!?\n\n\nInfelizmente ainda não identificamos o seu pix, nesse exato momento a chave pix ja expirou.\nCaso queira continuar o pagamento via pix, retorne essa mensagem para solicitar uma nova chave\nmas se estiver com dificuldade para fazer o pix, você pode pagar pelo  cartão de credito, utilizando o link\n\n\nhttps://redebrasilrp.com.br/pagamento?${
              clientePg.id
            }\n\n\n\n\n\n mensagem automatizada`;

            const sendMsg = await WhatsAppSms(clientePg.telefone, msg);

            const retorno: any = {
              msg1: update.message,
              msg2: updateLista.message,
              sms: JSON.stringify(sendMsg),
            };

            return Promise.all(retorno);
          } else {
            const data = {
              observacao: `${clientePg.observacao}\n ${novoHistorico}`,
              historico: `${clientePg.historico}${novoHistorico}`,
            };
            const url = `/save/${clientePg.id}`;
            const update = await PutRequest(url, data);
            const dados = {
              msg: 1,
              nome: clientePg.nome,
              razao: clientePg.razaosocial,
              cnpj: clientePg.cnpj,
              cpf: clientePg.cpf,
              txid: i.txid,
              status: i.status,
              cliente:clientePg.id
            };
            const urlLista = `/post/lista/ativo`;
            const updateLista = await PostRequest(urlLista, dados);

            const msg = `Ola ${
              !clientePg.razaosocial ? clientePg.nome : clientePg.razaosocial
            } tudo bem!?\n\n\nInfelizmente não identificamos o seu pix, nesse exato momento a chave pix ja expirou.\nCaso queira continuar o pagamento via pix, retorne essa mensagem para solicitar uma nova chave\nmas se estiver com dificuldade para fazer o pix, você pode pagar pelo  cartão de credito, utilizando o link\n\n\nhttps://redebrasilrp.com.br/pagamento?${
              clientePg.id
            }\n\n\n\n\n\n mensagem automatizada`;

            const sendMsg = await WhatsAppSms(clientePg.telefone, msg);

            const retorno: any = {
              msg1: update.message,
              msg2: updateLista.message,
              sms: JSON.stringify(sendMsg),
            };

            return Promise.all(retorno);
          }
        }

        // return 'O pagamento já foi registrado';
      }),
  );
