import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router-dom';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import useAuth from '../../Hooks/useAuth';

const CheckoutForm = ({ amount,eventName }) => {  // ✅ Fix: Destructure prop correctly
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState('');
  const [clientSecret, setClientSecret] = useState('');
  const [tranId, setTranId] = useState('');
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (amount > 0) {  // ✅ Fix: Use correct amount
      axiosSecure.post('/create-payment-intent', { price: amount })
        .then(res => {
          setClientSecret(res.data.clientSecret);
        })
        .catch(err => {
          console.error("Error creating payment intent:", err);
        });
    }
  }, [axiosSecure, amount]);  

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: card
    });

    if (error) {
      setError(error.message);
      return;
    } else {
      setError('');
    }

    const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: card,
        billing_details: {
          email: user?.email || 'unavailable',
          name: user?.displayName || 'unavailable'
        }
      }
    });

    if (confirmError) {
      setError(confirmError.message);
    } else {
      if (paymentIntent.status === 'succeeded') {
        setTranId(paymentIntent.id);

        const payment = {
          email: user?.email,
          transactionId: paymentIntent.id,
          eventName:eventName,
          price: amount,
          date: new Date(),
        };
       

        const res = await axiosSecure.post('/payment', payment);
        if (res.data?.paymentResult?.insertedId) {
          toast.success('Payment Successful');
        }
        navigate('/');
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-12">
      <div className="w-full bg-slate-100 max-w-lg p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
          Checkout Money: ${amount}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Card Details
            </label>
            <CardElement
              options={{
                style: {
                  base: {
                    fontSize: '16px',
                    color: '#424770',
                    '::placeholder': {
                      color: '#aab7c4',
                    },
                  },
                  invalid: {
                    color: '#9e2146',
                  },
                },
              }}
            />
          </div>
          <button
            type="submit"
            disabled={!stripe || !clientSecret}
            className="w-full py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 disabled:opacity-50 transition duration-200"
          >
            Pay Now
          </button>
          <p className='text-red-500'>{error}</p>
          {tranId && <p className='text-gray-500'>Transaction ID: {tranId}</p>}
        </form>
      </div>
    </div>
  );
};

export default CheckoutForm;
