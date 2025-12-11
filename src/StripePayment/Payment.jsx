import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { use, useEffect, useState } from 'react';
import PaymentForm from './PaymentForm';
import { Route, Routes, useParams } from 'react-router';
import { AuthContext } from './../Context/AuthContext/AuthContext';
import CompletePage from './CompletePage';

const stripePromise = loadStripe('pk_test_51SUX0FHCDzYOze3WoYGN9lja748QJnjSRuZ4ZgWDzRfFruFXC59pHM41IbkAwPEhfUdcRT68NXJxk0J1P3D5CuIJ00WWjhD97T');


const Payment = () => {
    const [pricingData, setPricingData] = useState([])
    const {id} = useParams();
    const {user} = use(AuthContext);
    console.log(id)

    const [clientSecret, setClientSecret] = useState(null);

    useEffect(()=>{
        console.log("token: ", user.accessToken);
        // Create PaymentIntent as soon as the page loads
        fetch("https://elevator-backend.vercel.app/api/create-payment-intent", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${user.accessToken}`,
            },
            body: JSON.stringify({ planId: id }),
        })
        .then((res) => res.json())
        .then((data) => setClientSecret(data.clientSecret));
    }, [])

    useEffect(() => {
        fetch('/pricingData.json')
            .then(res => res.json())
            .then(data => setPricingData(data))
            .catch(err => console.error(err));
    }, [id, user]);

    // const appearance = {
    //     theme: "stripe",
    //     variables: {
    //         colorPrimary: "#ffffff",
    //         colorBackground: "#1f2937",
    //         colorText: "#ffffff",
    //         colorDanger: "#EF4444",
    //         fontFamily: "Arial, sans-serif",
    //         fontSizeBase: "16px",
    //     },
    //     rules: {
    //         ".Label": { color: "#9CA3AF" },
    //     },
    // };

    // const loader = 'auto';
                 
    return (
        clientSecret && 
        <Elements options={{clientSecret}} stripe={stripePromise}>
            <Routes>
              <Route path="/" element={<PaymentForm pricingData={pricingData} id={id}/>} />
              <Route path="/complete" element={<CompletePage />} />
            </Routes>
        </Elements>
    );
};

export default Payment;