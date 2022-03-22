import fetch from 'node-fetch'

const SENDGRID_API = process.env.SENDGRID_API;
const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;

const sendEmail = async ({ messageContent }) => {
  await fetch(SENDGRID_API, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${SENDGRID_API_KEY}`
    },
    body: JSON.stringify({
      personalizations: [
        {
          to: [
            {
              // email: 'kassiogluten@gmail.com'
              email: 'contato@marinafernandes.com.br'
            }
          ],
          subject: '[SITE] Formulário de contato'
        }
      ],
      from: {
        email: 'marina@kassio.site',
        name: 'SITE MARINA'
      },
      content: [
        {
          type: 'text/html',
          value: messageContent
        }
      ]
    })
  });
}

export { sendEmail };
