"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendEmail = void 0;
const nodemailer = require("nodemailer");
const transporter = nodemailer.createTransport({
    service: "yahoo",
    auth: {
        user: "audiophile.75@yahoo.com",
        pass: "Urichcool1205",
    },
});
const sendEmail = () => {
    const mailOptions = {
        from: "audiophile.75@yahoo.com",
        to: "yurii.vovikov@gmail.com",
        subject: "Sending Email using Node.js",
        text: "That was easy!",
    };
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        }
        else {
            console.log("Email sent: " + info.response);
        }
    });
};
exports.sendEmail = sendEmail;
