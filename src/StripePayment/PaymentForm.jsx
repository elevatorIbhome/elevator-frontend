import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useState } from 'react';

const PaymentForm = ({pricingData,id}) => {
    const stripe = useStripe();
    const elements = useElements();
    const [error,setError]=useState("");

    // console.log(pricingData)
    // console.log(typeof pricingData[0].planId)

    const data = pricingData.filter(price => price.planId === id)
    // console.log(data[0].title)
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
                Complete Your Payment For 
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