import { useParams, useLocation } from 'react-router-dom';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';
import useEvent from '../../Hooks/useEvent';

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT);

const Payment = () => {
  const { id } = useParams(); 
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const donationAmount = queryParams.get('amount'); 
  const [events] = useEvent();
  const selectedEvent = events.find(event => event._id === id);

  return (
    <div className="p-4 border rounded-lg shadow-md">
    <Elements stripe={stripePromise}>
      <CheckoutForm eventName={selectedEvent?.eventName} amount={donationAmount} />
    </Elements>
  </div>
  );
};

export default Payment;
