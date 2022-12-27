const fs = require('fs');
const path = require('path');
const nodemailer = require('nodemailer');
var htmlToText = require('nodemailer-html-to-text').htmlToText;

const confirmOrder = async (email, asunto = '', {id}, secure_url) => {
  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      auth: {
        user: "einar.kuhlman83@ethereal.email", // generated ethereal user
        pass: 'G94znWRrcBHQ2KUg4t'
      },
    });

    transporter.use('compile', htmlToText());

    const isSend = await transporter.sendMail({
      from: "einar.kuhlman83@ethereal.email",
      to: email,
      subject: asunto,
      html: `
            <h1>Por favor descarga el archivo de la poliza</h1>
          `,
      attachments: [{
        filename: 'poliza.pdf',
        path: path.join(__dirname, `../pdf/orders/${id}.pdf`),
        contentType: 'application/pdf'
      }]
    });

  } catch (error) {
    console.log(error, "email not sent");
  }
};

module.exports = confirmOrder;