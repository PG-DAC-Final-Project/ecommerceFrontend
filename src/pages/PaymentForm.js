import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const stripePromise = loadStripe('pk_test_51NjJ3VSE0sLCN9CSfdm0O9YR0a5jVh8jyeLvHcoV79kiAgMBLT41TS0gBDYaC8hlVn5odOQQWJxQxlFqgAzKYXlS00tKsRupU5');

function PaymentForm() {
    const [amount, setAmount] = useState(100); // Amount in cents
    const [clientSecret, setClientSecret] = useState('');
    const [paymentStatus, setPaymentStatus] = useState('');

    const handlePayment = async () => {
        try {
            const response = await fetch(`http://localhost:8080/api/payment/create-payment-intent?amount=${amount}`);
            const data = await response.json();
            setClientSecret(data);

            const stripe = await stripePromise;
            const result = await stripe.confirmCardPayment(clientSecret, {
                payment_method: {
                    card: stripe.elements.getElement('card'),
                },
            });

            if (result.error) {
                setPaymentStatus('Payment failed');
            } else {
                setPaymentStatus('Payment successful');
            }
        } catch (error) {
            console.error('Payment error:', error);
            setPaymentStatus('Payment error');
        }
    };

    return (
        <div>
            <h2>Payment Form</h2>
            <p>Amount: ${amount / 100}</p>
            <div id="card-element">
                <CardElement />
            </div>
            <button onClick={handlePayment}>Pay Now</button>
            <p>{paymentStatus}</p>
        </div>
    );

}

export default PaymentForm;