require("dotenv").config();
const { MAIL, MAIL_SENDER, PORT, API_KEY } = process.env;
const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(API_KEY);
const express = require("express");
const server = express();
const cors = require("cors");
const allowOrigin = cors();

//Middleware
server.use(express.json());
server.use(express.urlencoded({ extended: false }));
server.use(allowOrigin);

//Server request
server.post("/send", (req, res) => {
  const { name, email, subject, message } = req.body;

  const msg = {
    to: MAIL,
    from: MAIL_SENDER,
    subject: subject,
    text: `${message}  from ${name} using ${email} account`,
  };
  sgMail.send(msg, (err, info) => {
    if (err) console.log(err);
    else {
      console.log("Email sent successfully.");
      res.send("Email sent successfully.");
    }
  });
});

server.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
