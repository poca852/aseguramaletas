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
      host: "pro.turbo-smtp.com",
      port: 465,
      auth: {
        user: "david-cuspoca@hotmail.com", // generated ethereal user
        pass: 'xno0J0lJ'
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
        path: path.join(__dirname, `../uploads/orders/${pdf}`),
        contentType: 'application/pdf'
      }]
    });

  } catch (error) {
    console.log(error, "email not sent");
  }
};

module.exports = confirmOrder;