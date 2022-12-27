const fs = require('fs');
const path = require('path');
const nodemailer = require('nodemailer');
var htmlToText = require('nodemailer-html-to-text').htmlToText;

const confirmOrder = async ({
  email,
  firstName,
  lastName,
  pdf,
}) => {
  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      auth: {
        user: "fidel.corkery@ethereal.email", // generated ethereal user
        pass: 'dtnzerfeCh2YEcMxXz'
      },
    });

    transporter.use('compile', htmlToText());

    const isSend = await transporter.sendMail({
      from: "david-cuspoca@hotmail.com",
      to: email,
      subject: 'Poliza',
      html: `
            <h1>Querid@ ${firstName} ${lastName} por favor descargue el archivo adjunto, en donde viene su poliza</h1>
          `,
      attachments: [{
        filename: `${pdf}`,
        path: path.join(__dirname, `../pdf/orders/${pdf}`),
        contentType: 'application/pdf'
      }]
    });

  } catch (error) {
    console.log(error, "email not sent");
  }
};

module.exports = confirmOrder;