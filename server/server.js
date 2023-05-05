const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
require('dotenv').config();
const port = 5500;
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

app.get('/', (req, res) => {
    res.send('Hello word');
});

app.post('/checkout', async (req, res) => {
    await stripe.charges.create({
        source: req.body.token.id,
        amount: req.body.amount,
        currency: 'usd'
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});