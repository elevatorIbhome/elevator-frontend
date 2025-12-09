import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const PaymentForm = ({pricingData}) => {
    const stripe = useStripe();
    const elements = useElements();
    const [error,setError]=useState("");
    const id = useParams().id;
     const [plan, setPlan] = useState(null);
    const [loading, setLoading] = useState(true);


    console.log(id)

    // loading plansdata 
     useEffect(() => {
        if (!id) return;

        const fetchPlan = async () => {
            try {
                const res = await fetch(`http://localhost:3000/plans/${id}`);
                const data = await res.json();
                setPlan(data);
            } catch (err) {
                console.error("Error loading plan:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchPlan();
    }, [id]);

      if (loading) return <p className="text-center">Loading...</p>;

      console.log("hello",plan)



    const data = pricingData.find(price => price.planId === id)
    console.log(data)
    //66.3

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log('hi')
        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement)

        if (!card) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
          setError(error.message)
        } else {
            setError('')
            console.log("payment method", paymentMethod)
        }
    }
    return (
        <div className="max-w-md mx-auto bg-white dark:bg-gray-900 shadow-lg rounded-xl p-6 border border-gray-200 dark:border-gray-700">
            <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
                Complete Your Payment For <span className='text-blue-600 font-bold'>{plan.title}</span>
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">

                {/* Stripe Card Input */}
                <div className="p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800">
                    <CardElement
                        className="text-gray-800 dark:text-gray-100"
                        options={{
                            style: {
                                base: {
                                    fontSize: "16px",
                                    color: "#ffffff",
                                    "::placeholder": { color: "#9CA3AF" }
                                },
                                invalid: { color: "#EF4444" }
                            }
                        }}
                    />
                </div>   

                {/* Submit Button */}
                <button
                    type="submit"
                    disabled={!stripe}
                    className={`w-full py-3 rounded-lg text-white font-semibold transition
                ${!stripe
                            ? "bg-gray-400 cursor-not-allowed"
                            : "bg-blue-600 hover:bg-blue-700"
                        }`}
                >
                    Pay for Elevator
                </button>
                {
                    error && <p className='text-red-500'>{error}</p>
                }
            </form>
        </div>
    );
};

export default PaymentForm;