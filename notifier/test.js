const EmailTransporter = require("./emailService");

const emailObj = {
  from: "sachinsachin9108745860@gmail.com",
  to: "rajusachin090@gmail.com",
  subject: "TicketBooking App",
  text: "Hello! Please find the details",
};

EmailTransporter.sendMail(emailObj, async function (err, info) {
  if (err) {
    console.log(err.message);
  } else {
    //Mark the status as SENT
    console.log(info);
  }
});
