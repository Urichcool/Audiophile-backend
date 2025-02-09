"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendEmail = void 0;
const handlebars_1 = __importDefault(require("handlebars"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const juice_1 = __importDefault(require("juice"));
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const getTemplate = (templateName, data) => {
    const templatePath = path_1.default.join(__dirname, "emailTemplates", `${templateName}.html`);
    const templateSource = fs_1.default.readFileSync(templatePath, "utf8");
    const compiledTemplate = handlebars_1.default.compile(templateSource);
    const html = compiledTemplate(data);
    return (0, juice_1.default)(html);
};
const sendEmail = (order) => {
    const { shippingData, products, total } = order;
    const htmlContent = getTemplate("order", { shippingData, products, total });
    const mailOptions = {
        from: "audiophile <audiophile.75@outlook.com>",
        to: order.shippingData.email,
        html: htmlContent,
        subject: 'Order info',
        text: 'mail',
    };
    sgMail
        .send(mailOptions)
        .then(() => {
        console.log('Email sent');
    })
        .catch((error) => {
        console.error(error);
    });
};
exports.sendEmail = sendEmail;
