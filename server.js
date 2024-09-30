// Import required modules
const express = require('express');
const bodyParser = require('body-parser');
const mailgun = require('mailgun-js');
const cors = require('cors'); 

// Initialize express application and set ports
const app = express();
const PORT = 2002;

// Configure Mailgun
const api_key = 'bb22b6fda1a0c006bdc89307a44e5255-3724298e-1693f208';
const domain = 'sandboxc0e66dbc81b848c29a467774493006f0.mailgun.org';
const mg = mailgun({apiKey: api_key, domain: domain});

// Middleware
app.use(cors()); 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); 
app.use(express.static(__dirname));
app.use(express.static("public"));

// Define a route for handling POST request
app.post('/subscribe', (req, res) => {
    //Retrive the email fro the request
  const email = req.body.email; 
  const data = {
    from: 'Nisal <riphathnisal2@gmail.com>', 
    to: email,
    subject: 'Hello Deakin Students',
    text: 'Welcome to our daily insider!'
  };

  // Send the email using Mailgun
  mg.messages().send(data, (error, body) => {
    if (error) {
      console.log(error);
      return res.status(500).send(error);
    }
    console.log(body);
    res.send('Subscription successful! Check your email for a welcome message.');
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
