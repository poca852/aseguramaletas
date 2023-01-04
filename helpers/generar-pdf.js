const fs = require('fs');
const path = require('path');
const cloudinary = require('cloudinary').v2;
cloudinary.config(process.env.CLOUDINARY_URL);
const { PDFDocument, StandardFonts, rgb } = require('pdf-lib');
const moment = require('moment-timezone');
const {ProductModel} = require('../models')


// Create a new PDFDocument
const generarPdf = async ({
  name, 
  initial_date, 
  finish_date,
  _id,
  plan}) => {

  const product = await ProductModel.findById(plan);

  const existingPdfBytes = fs.readFileSync(path.join(__dirname, `../uploads/${product.ref}.pdf`));

  const date_initial = moment(initial_date).format('DD/MM/YYYY');
  const date_finish = moment(finish_date).format('DD/MM/YYYY');

  // Load a PDFDocument from the existing PDF bytes
  const pdfDoc = await PDFDocument.load(existingPdfBytes)

  // Embed the Helvetica font
  const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica)

  // Get the first page of the document
  const pages = pdfDoc.getPages()
  const firstPage = pages[0]

  // Get the width and height of the first page
  const { width, height } = firstPage.getSize()

  firstPage.drawText(date_initial, {
    x: 533,
    y: height / 2 + 285,
    size: 10,
    font: helveticaFont,
    color: rgb(0, 0, 0),
    // rotate: degrees(-45),
  })

  // Draw a string of text diagonally across the first page
  firstPage.drawText(`${name}`, {
    x: 90,
    y: height / 2 + 237,
    size: 10,
    font: helveticaFont,
    color: rgb(0, 0, 0),
    // rotate: degrees(-45),
  });

  firstPage.drawText(`N/A`, {
    x: 65,
    y: height / 2 + 223,
    size: 10,
    font: helveticaFont,
    color: rgb(0, 0, 0),
    // rotate: degrees(-45),
  })

  firstPage.drawText(JSON.stringify(_id), {
    x: 370,
    y: height / 2 + 210,
    size: 10,
    font: helveticaFont,
    color: rgb(0, 0, 0),
  })

  firstPage.drawText(date_initial, {
    x: 90,
    y: height / 2 + 137,
    size: 10,
    font: helveticaFont,
    color: rgb(0, 0, 0),
  })

  firstPage.drawText(date_initial, {
    x: 60,
    y: height / 2 + 120,
    size: 10,
    font: helveticaFont,
    color: rgb(0, 0, 0),
  })

  firstPage.drawText(date_finish, {
    x: 270,
    y: height / 2 + 120,
    size: 10,
    font: helveticaFont,
    color: rgb(0, 0, 0),
  })
  // Serialize the PDFDocument to bytes (a Uint8Array)
  const pdfBytes = await pdfDoc.save();
  fs.writeFileSync(path.join(__dirname, `../uploads/orders/${_id}.pdf`), pdfBytes);

  // const doc = path.join(__dirname, `../uploads/orders/${_id}.pdf`);
  // const {secure_url} = await cloudinary.uploader.upload(doc);
  return `${_id}.pdf`;
};

module.exports = generarPdf
