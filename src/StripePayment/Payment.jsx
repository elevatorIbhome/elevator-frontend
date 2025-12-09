import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect, useState } from 'react';
import PaymentForm from './PaymentForm';
import { useParams } from 'react-router';

const stripePromise = loadStripe('pk_test_6pRNASCoBOKtIshFeQd4XMUh');


const Payment = () => {
    const [pricingData, setPricingData] = useState([])
    const {id} = useParams();
    console.log(id)
    useEffect(() => {
        fetch('/pricingData.json')
            .then(res => res.json())
            .then(data => setPricingData(data))
            .catch(err => console.error(err));
    }, []);

                 
    return (
        <Elements stripe={stripePromise}>
            <PaymentForm pricingData={pricingData} id={id}></PaymentForm>
        </Elements>
    );
};

export default Payment;