import axios from 'axios';

export const WhatsAppSms = async (tel: string, msg: string) => {
  const url = 'https://api.inovstar.com/core/v2/api/chats/send-text';

  const ContentType: string = `${process.env.ZAP_TYPE}`;
  const Token: string = `${process.env.ZAP_TOKEN}`;
  try {
    const request = await axios({
      url: url,
      method: 'POST',
      headers: {
        'Content-Type': ContentType,
        'Access-Token': Token,
      },
      data: {
        number: '55' + tel,
        message: msg,
        forceSend: true,
        verifyContact: false,
      },
    });

    const resposta = request.data;
    return resposta;
  } catch (error) {
    console.log(error.response.data);
    return error.response.data;
  }
};
