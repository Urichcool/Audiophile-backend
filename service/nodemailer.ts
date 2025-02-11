import { IOrders } from "../interfaces/orders";
import handlebars from "handlebars";
import fs from "fs";
import path from "path";
import juice from "juice";
const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)


const getTemplate = (templateName: string, data: IOrders) => {
  const templatePath: string = path.join(
    __dirname,
    "emailTemplates",
    `${templateName}.html`
  );
  const templateSource: string = fs.readFileSync(templatePath, "utf8");
  const compiledTemplate: HandlebarsTemplateDelegate<any> =
    handlebars.compile(templateSource);
  const html: string = compiledTemplate(data);
  return juice(html);
};

export const sendEmail: (order: IOrders) => void = (order) => {
  const {shippingData, products, total} = order 
  const htmlContent = getTemplate("order", {shippingData, products, total});
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
    console.log('Email sent')
  })
  .catch((error:any) => {
    console.error(error)
  })
};
