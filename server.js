//Import required modules
const express = require('express');
const bodyParser = require('body-parser');
const mailgun = require('mailgun-js');

//Initialize express application and set ports
const app = express();
const PORT = 2002;

// Configure Mailgun
const api_key = 'f0eb88d8e09a85c16947443fc70410c4-afce6020-3cb2e4e7';
const domain = 'sandbox907a0db681b74e97ab184b76a7d0a2c3.mailgun.org';
const mg = mailgun({apiKey: api_key, domain: domain});

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname));
app.use(express.static("public"));

// Define a route for handeling POST request
app.post('/subscribe', (req, res) => {
    //extract the email address and complie nessasry response
    const email = req.body.email;
    const data = {
        from: 'Nisal <riphathnisal2@gmail.com>',
        to: email,
        subject: 'Hello Deakin Students',
        text: 'Welcome to our daily insider!'
    };

    //Send the email using mailgun
    mg.messages().send(data, (error, body) => {
        if (error) {
            //log errors if any
            console.log(error);
            return res.status(500).send('An error occurred while sending the email.');
        }
        console.log(body);
        res.send('Subscription successful! Check your email for a welcome message.');
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
