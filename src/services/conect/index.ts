import https from 'https';
import fs from 'fs';
import axios from 'axios';

export const ConectiPx = async () => {
  // Insira o caminho de seu certificado .p12 dentro de seu projeto
  const certificado = fs.readFileSync('./certificado.p12');

  // Insira os valores de suas credenciais em desenvolvimento do pix
  const credenciais = {
    client_id: PixCredential.YOUR_CLIENT_ID,
    client_secret: PixCredential.YOUR_CLIENT_SECRET,
  };

  const data = JSON.stringify({ grant_type: 'client_credentials' });
  const data_credentials = `${credenciais.client_id}:${credenciais.client_secret}`;

  // Codificando as credenciais em base64
  const auth = Buffer.from(data_credentials).toString('base64');

  const agent = new https.Agent({
    pfx: certificado,
    passphrase: '',
  });

  // Consumo em desenvolvimento da rota post oauth/token
  const config = {
    method: 'POST',
    url: 'https://api-pix-h.gerencianet.com.br/oauth/token',
    headers: {
      Authorization: `Basic ${auth}`,
      'Content-Type': 'application/json',
    },
    httpsAgent: agent,
    data,
  };

  try {
    const response = await axios(config);
    console.log(JSON.stringify(response.data));
  } catch (error) {
    console.log(error);
  }
};
