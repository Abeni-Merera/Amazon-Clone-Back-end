
const functions = require("firebase-functions");

const express = require('express');
const cors = require('cors');


const stripe = require('stripe')('sk_test_51Lwp3oEVKXKlf8FPgn5Rs7alVA7gykTJAKTfBh4uOu7quz2V7JSxbXecwpz8vlXlcrFKKk2Ci17Z5TyOh42pXWul00v9XqznHN');

const app = express();
app.use(cors({origin: true}));
app.use(express.json());

app.get('/', (request, response) => response.status(200).send('Hello world'))

app.post('/payments/create', async (request, response) => {
    const getTotal = request.query.total
    console.log('Payment request recieved for this amount', getTotal);
    const paymentIntent = await stripe.paymentIntents.create({
        amount: getTotal,
        currency: 'usd'
    });

    //Ok / Created
response.status(201).send({
    clientSecret: paymentIntent.client_secret,

})

})
// Listen command
exports.api = functions.https.onRequest(app);


