import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export const sendVerificationEmail = async (
  to: string,
  name: string,
  token: string
) => {
  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to,
    subject: "Verify Your Email",

    html: `
      <h2>Hello ${name}</h2>
      <p>Please verify your email:</p>

      <a href="http://localhost:5000/api/v1/auth/verify-email/${token}">
        Click to Verify
      </a>
    `,
  });
};