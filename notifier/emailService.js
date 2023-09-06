const nodemailer = require("nodemailer");

module.exports = nodemailer.createTransport({
  port: 465,
  host: "sachisachin9108745860@gmail.com",
  auth: {
    user: "rajusachin090@gmail.com",
    pass: "zxxgnzhyliqummfg",
  },
  secure: true,
});
