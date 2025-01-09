import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import useCart from "../../../CustomHooks/useCart";
import useAxiosInstance from "../../../CustomHooks/useAxiosInstance";
import { AuthContext } from "../../../Provider/AuthProvider";

const CheckoutForm = () => {
  const [error, setError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [paymentId, setPaymentId] = useState("");
  const { user } = useContext(AuthContext);
  const stripe = useStripe();
  const elements = useElements();
  const axiosInstance = useAxiosInstance();
  const [cartsData, refetch] = useCart();
  const totalPrice = cartsData?.reduce((pre, cur) => pre + cur?.price, 0);
  console.log(cartsData);
  useEffect(() => {
    if (totalPrice) {
      axiosInstance
        .post(`/create-payment-intent`, { price: totalPrice })
        .then((res) => setClientSecret(res.data.clientSecret));
    }
  }, [axiosInstance, totalPrice]);
  console.log(clientSecret);
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }
    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: card,
    });
    if (error) {
      console.error("Error creating payment method:", error);
      setError(error.message);
    } else {
      console.log(paymentMethod);
      setError("");
    }
    //Confirm payment
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "anonymous",
            name: user?.displayName || "anonymous",
          },
        },
      });
    if (confirmError) {
      console.error("Error confirming payment:", confirmError);
      // setError(confirmError.message);
    } else {
      console.log("Payment Intent value", paymentIntent);
      if (paymentIntent.status === "succeeded") {
        setPaymentId(paymentIntent.id);

        //save payment data
        const payments = {
          email: user?.email,
          price: totalPrice,
          date: new Date(),
          foodIds: cartsData.map((food) => food.foodId),
          cardIds: cartsData.map((card) => card._id),
          paymentId: paymentIntent.id,
          status: "pending",
        };
        const { data } = await axiosInstance.post(`/save-payment`, payments);
        if (data.insertedId) {
          toast.success("Your payment is successfully👋");
          refetch();
        }
      }
    }
  };
  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="border border-gray-500 p-4 rounded-md"
      >
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          type="submit"
          disabled={!stripe || !clientSecret}
          className="bg-teal-400 px-3 text-white py-1 rounded-md mt-3"
        >
          Pay
        </button>
        {paymentId && (
          <div className="text-green-500 font-bold text-sm">
            Your payment has been successfully processed. Payment ID:{" "}
            {paymentId}
          </div>
        )}
      </form>
      {error ? (
        <div className="text-red-500 text-xs font-semibold mt-1">{error}</div>
      ) : (
        ""
      )}
    </div>
  );
};

export default CheckoutForm;
