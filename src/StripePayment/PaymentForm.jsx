import { CardElement, PaymentElement, useElements, useStripe } from '@stripe/react-stripe-js';
import Swal from "sweetalert2";
import React, { useEffect, useState } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router';

const PaymentForm = ({pricingData}) => {
    const stripe = useStripe();
    const elements = useElements();
    const [error,setError]=useState("");
    const id = useParams().id;
     const [plan, setPlan] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate()


    console.log(id)

    // loading plansdata 
     useEffect(() => {
        if (!id) return;

        const fetchPlan = async () => {
            try {
                const res = await fetch(`https://elevator-backend.vercel.app/plans/${id}`);
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
        if (!stripe || !elements) { 
            console.error("Stripe is not initialized or elements are not mounted.");
            return; 
        }
        // setLoading(true); 
        const returnUrl = `${window.location.origin}/payment/${id}/complete`;
        console.log(returnUrl);

        try {
        
            const { error, paymentIntent } = await stripe.confirmPayment({
                elements,
                confirmParams: {
                    return_url: returnUrl,
                },
                redirect: "if_required",
            });

            if (error) {
                setError(error.message)

                Swal.fire({
                    icon: "error",
                    title: "Payment Failed",
                    text: error.message,
                });

            } else if (paymentIntent?.status === "succeeded") {
                Swal.fire({
                    title: "Payment Successful!",
                    html: `
                        <p>Transaction ID: <strong>${paymentIntent.id}</strong></p>
                        <p>Amount: <strong>${paymentIntent.amount / 100} DKK</strong></p>
                    `,
                    icon: "success",
                    showCancelButton: false,
                    confirmButtonText: "Go Home",
                }).then((result) => {
                    if (result.isConfirmed) {
                        navigate("/");
                    }
                });

            } else if (paymentIntent?.status === "requires_action") {
                Swal.fire({
                    icon: "info",
                    title: "Additional Authentication Required",
                    text: "Please complete the authentication prompt.",
                });
            }
        } catch (e) {
            console.error("Payment confirmation failed:", e);

        } finally {
            setLoading(false); 
        }
        
    }

    const paymentElementOptions = {
        layout: "accordion"
    }

    return (
        <div className="max-w-md mx-auto bg-white dark:bg-gray-900 shadow-lg rounded-xl p-6 border border-gray-200 dark:border-gray-700">
            <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
                Complete Your Payment For <span className='text-blue-600 font-bold'>{plan.title}</span>
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">

                {/* Stripe Card Input */}
                <div className="p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800">
                    <PaymentElement options={paymentElementOptions} />
                </div>   

                {/* Submit Button */}
                <button
                    type="submit"
                    disabled={loading || !stripe || !elements}
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