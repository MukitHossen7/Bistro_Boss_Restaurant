import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";

const Payment = () => {
  // TODO :Add publishable key

  const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_GETWAY_KEY);
  return (
    <div className="w-11/12 mx-auto">
      <h3 className="text-2xl font-medium py-10">
        Pay to Payment and get Happy
      </h3>
      <div>
        <Elements stripe={stripePromise}>
          <CheckoutForm></CheckoutForm>
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
