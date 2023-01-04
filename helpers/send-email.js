const fs = require('fs');
const path = require('path');
const nodemailer = require('nodemailer');
var htmlToText = require('nodemailer-html-to-text').htmlToText;

const confirmOrder = async ({
  email,
  name,
  pdf,
}) => {
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.HOST_SMTP,
      port: +process.env.PORT_SMTP,
      auth: {
        user: process.env.USER_SMTP, // generated ethereal user
        pass: process.env.PASS_SMTP
      },
    });

    transporter.use('compile', htmlToText());

    const isSend = await transporter.sendMail({
      from: "david-cuspoca@hotmail.com",
      to: email,
      subject: 'Poliza',
      html: `
            <h1>Querid@ ${name} por favor descargue el archivo adjunto, en donde viene su poliza</h1>
          `,
      attachments: [{
        filename: `${pdf}`,
        path: path.join(__dirname, `../uploads/orders/${pdf}`),
        contentType: 'application/pdf'
      }]
    });

  } catch (error) {
    console.log(error, "email not sent");
  }
};

module.exports = confirmOrder;