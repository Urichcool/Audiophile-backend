const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "yahoo",
  auth: {
    user: "audiophile.75@yahoo.com",
    pass: "Urichcool1205",
  },
});



export const sendEmail = () => {
const mailOptions = {
  from: "audiophile.75@yahoo.com",
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

