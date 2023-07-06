import JSEncrypt from 'node-jsencrypt';
import request from 'request';

const getPaymentToken = async (pay_token: string, cardData: any): Promise<any> => {

  const getSalt = (pay_token: string): Promise<string> => {
    return new Promise((resolve, reject) => {
      let options = {
        method: 'get',
        url: 'https://tokenizer.gerencianet.com.br/salt', // Rota para homologação é a mesma
        headers: {
          'account-code': pay_token
        }
      };

      return request(options, function (error: any, response: any, body: string | PromiseLike<string>) {
        if (error) return reject(error);

        try {
          resolve(body);
        } catch (e) {
          reject(e);
        }
      });
    });
  };

  const getPublicKey = (pay_token: string): Promise<string> => {
    return new Promise((resolve, reject) => {
      let options = {
        method: 'GET',
        'url': 'https://sandbox.gerencianet.com.br/v1/pubkey?code=' + pay_token // Rota para homologação
        // url: 'https://api.gerencianet.com.br/v1/pubkey?code=' + pay_token // Rota para produção
      };

      return request(options, function (error: any, response: any, body: string | PromiseLike<string>) {
        if (error) return reject(error);
  
        try {
          resolve(body);
        } catch (e) {
          reject(e);
        }
      });
    });
  };

  const saveCardData = (pay_token: string, saltTokenizer: string, publicKey: string, cardData: any): Promise<string> => {
    return new Promise(async (resolve, reject) => {

      cardData.salt = saltTokenizer;

      let crypt = await new JSEncrypt();

      try {
        await crypt.setPublicKey(publicKey);
        var encryptedCardData = await crypt.encrypt(JSON.stringify(cardData));
      } catch (e) {
        reject(e);
      }

      let options = {
        method: 'POST',
        'url': 'https://sandbox.gerencianet.com.br/v1/card', // Rota para homologação 
        // url: 'https://tokenizer.gerencianet.com.br/card', // Rota para produção
        headers: {
          'account-code': pay_token,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ "data": encryptedCardData })
      };

      return request(options, function (error: any, response: any, body: string | PromiseLike<string>) {
        if (error) return reject(error);
     
        try {
          resolve(body);
        } catch (e) {
          reject(e);
        }
      });
    });
  };

  var saltTokenizer: any = await getSalt(pay_token);
  saltTokenizer = JSON.parse(saltTokenizer);
  //console.log("saltTokenizer: " + saltTokenizer.data);

  //console.log("");

  var publicKey: any = await getPublicKey(pay_token);
  publicKey = JSON.parse(publicKey);
  //console.log("publicKey: " + publicKey.data);

  //console.log("");

  const savedCardData = await saveCardData(pay_token, saltTokenizer.data, publicKey.data, cardData);
  //console.log("cardData: " + savedCardData);

  return savedCardData;
};

export default getPaymentToken;
