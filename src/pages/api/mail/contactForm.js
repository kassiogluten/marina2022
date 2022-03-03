import { sendEmail } from "../_lib/sendEmail";

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
  if (req.method === "POST") {
    const { name, phone, email, message } = req.body;

    const messageContent = `
        <div style="max-width:600px; font-size:16px; line-height:1.6;">
          <p>Foi recebido um contato <strong>via site</strong>, com os dados abaixo.</p>
          <p><strong>Nome:</strong> ${name}</p>
          <p><strong>Telefone:</strong> ${phone}</p>
          <p><strong>E-mail:</strong> ${email}</p>
          <p><strong>Mensagem:</strong> ${message}</p>
        </div>
      `;

    await sendEmail({ messageContent });

    return res.status(200).end();
  }

  return res.status(404).json({
    error: {
      code: "not_found",
      messgae:
        "The requested endpoint was not found or doesn't support this method.",
    },
  });
};
