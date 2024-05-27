import nodemailer from 'nodemailer';

export const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST as string,
    port: 465,
    secure: true,
    logger: true,
    debug: true,
    auth: {
        user: process.env.SMTP_USER as string,
        pass: process.env.SMTP_PASS as string,
    }
});
