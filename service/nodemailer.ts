const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp-mail.outlook.com",
  port: 587,
  secure: false,
  service: "outlook",
  auth: {
    user: process.env.MAIL,
    pass: process.env.MAILPASSWORD,
  },
});



export const sendEmail = () => {
const mailOptions = {
  from: process.env.MAIL,
  to: "yurii.vovikov@gmail.com",
  subject: "Sending Email using Node.js",
  text: "That was easy!",
};

transporter.sendMail(mailOptions, function (error: any, info: any) {
  if (error) {
    console.log(error);
  } else {
    console.log("Email sent: " + info.response);
  }
});
}

