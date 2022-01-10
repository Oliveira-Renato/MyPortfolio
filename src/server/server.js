//file called server.js and first load the required dependencies:
const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");

//Now i will use express() to setup the server that’ll run on port 5000:
const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(5000, () => console.log("Server Running"));


const contactEmail = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: "**********************@gmail.com",
    pass: '*******************',
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send");
  }
});



router.post("/contact", (req, res) => {
  const name = req.body.name;
  const lastname = req.body.lastname;
  const email = req.body.email;
  const subject = req.body.subject;
  const message = req.body.message; 
  const mail = {
    from: `${name}`,
    to: "*************@gmail.com",
    subject: `${subject}`,
    html: `<p>Nome: ${name}</p>
           <p>Sobrenome: ${lastname}</p>
           <p>Email: ${email}</p>
           <p>Mensagem: ${message}</p>`,
  };
  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json({ status: "ERROR" });
    } else {
      res.json({ status: "Message Sent" });
    }
  });
});
