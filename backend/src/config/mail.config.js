const nodemailer = require('nodemailer');

console.log("process",process.env)
const mailTransporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
});

module.exports = mailTransporter;