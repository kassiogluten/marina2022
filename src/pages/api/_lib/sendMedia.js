import fetch from "node-fetch";

const SENDGRID_API = process.env.SENDGRID_API;
const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;

const sendMedia = async ({ messageContent, email }) => {
  await fetch(SENDGRID_API, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${SENDGRID_API_KEY}`,
    },
    body: JSON.stringify({
      personalizations: [
        {
          to: [
            {
              email: email,
              // email: 'contato@marinafernandes.com.br'
            },
          ],
          cc: [
            {
              email: "contato@marinafernandes.com.br",
              name: "Marina",
            },
          ],
          subject: "[Marina] Media Kit",
        },
      ],
      from: {
        email: "marina@kassio.site",
        name: "Marina Fernandes",
      },
      content: [
        {
          type: "text/html",
          value: messageContent,
        },
      ],
    }),
  });
};

export { sendMedia };
