require('dotenv').config();
const express = require('express');
const app = express();

const nodemailer = require("nodemailer");

const PORT = process.env.PORT || 5000;

//Middleware
app.use(express.static('public'));
app.use(express.json())

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/public/pages/kontakt.html")
});

app.post("/", (req, res) => {
    console.log(req.body)

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "wiktor.jaworowski25@gmail.com",
            pass: process.env.PASS
        }
    })

    const mailOptions = {
        from: req.body.email,	
        to: "wiktor.jaworowski25@gmail.com",
        subject: `Nachricht von ${req.body.email}: ${req.body.subject}`,
        text: req.body.message
    }

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.send('error');
        }else {
            console.log("Email sent: " + info.resposne);
            res.send("success")
        }
    })

})


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
}); 