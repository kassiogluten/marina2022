import { sendMedia } from "../_lib/sendMedia";

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
  if (req.method === "POST") {
    const { name, phone, email, message } = req.body;

    const messageContent = `
        <div style="max-width:600px; font-size:16px; line-height:1.6;">
          <p>Download do Mídia Kit Marina Fernandes:<br/></p>
          <a href="https://drive.google.com/file/d/1zZXEXvPGhqedbdFMb9Tj_QdZzcPN6nu6/view?usp=sharing">https://drive.google.com/file/d/1zZXEXvPGhqedbdFMb9Tj_QdZzcPN6nu6/view?usp=sharing</a>
        </div>
      `;

    await sendMedia({ messageContent, email });

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
