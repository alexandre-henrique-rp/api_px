# API DE PAGAMENTO PIX

![Conda - License](https://img.shields.io/conda/l/alexandre-henrique-rp/api_px?style=plastic)

Esta API foi desenvolvida utilizando a nova tecnologia SDK da GerenciaNet (Banco Efi) para processar pagamentos PIX. A API possui três rotas principais:

- Rota para criar pagamento: `/create/payment/:id`
- Rota para verificar pagamento: `/check/payment/:id`
- Rota para gerar QRCode: `/qrcode/:id`

Fique livre para personalizar a aplicação de acordo com as suas necessidades.

## Utilização

Para utilizar a API, siga os passos abaixo:

1. Clone o repositório em seu computador
2. Instale as dependências com o comando `npm install`
3. Crie um arquivo `.env` na raiz do projeto com as seguintes informações:

GERENCIANET_CLIENT_ID=SEU_CLIENT_ID
GERENCIANET_CLIENT_SECRET=SUA_CLIENT_SECRET
GERENCIANET_PIX_KEY=SUA_PIX_KEY

4. Inicie o servidor com o comando `npm start`
5. Utilize as rotas conforme sua necessidade

## Autor


| [<img src="https://avatars.githubusercontent.com/u/64115785?v%3D4" width=115><br><sub>Alexandre Hinrique da rocha Araujo</sub>](https://github.com/alexandre-henrique-rp)  |
| :---: | 

