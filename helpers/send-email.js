const fs = require('fs');
const path = require('path');
const nodemailer = require('nodemailer');
var htmlToText = require('nodemailer-html-to-text').htmlToText;

const confirmOrder = async ({
  email = '',
  name,
  pdf,
}) => {
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.HOST_SMTP,
      port: +process.env.PORT_SMTP,
      secure: true,
      auth: {
        user: process.env.USER_SMTP, // generated ethereal user
        pass: process.env.PASS_SMTP
      },
    });

    transporter.use('compile', htmlToText());

    const isSend = await transporter.sendMail({
      from: "webmaster@aseguramaletas.com",
      to: email.toLowerCase(),
      subject: 'Asguramaletas - poliza de seguro.',
      html: `
            <h3>Poliza de seguro</h3>
            <p>Estimado(a) ${name} muchas gracias por confiar en nosotros para asegurar su equipaje, a continuación le adjuntamos la póliza del seguro, por favor guárdela.</p>
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