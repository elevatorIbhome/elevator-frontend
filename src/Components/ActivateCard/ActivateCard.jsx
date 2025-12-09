import { title } from 'framer-motion/client';
import React, { use, useEffect, useRef, useState } from 'react';
import { AuthContext } from '../../Context/AuthContext/AuthContext';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router';
// const pricingData = [
//     {
//         title: "Intro",
//         planId: '0001',
//         subtitle: "Free",
//         description: "",
//         price: "0.00",
//         currency: "kr. DKK",
//         period: "7 Days",
//         badge: {
//             text: "FREE TRIAL",
//             color: "bg-gradient-to-r from-pink-500 to-red-500"
//         },
//         features: [
//             "Covers: 1 city/area",
//             "Target group: All businesses curious to try without commitment."
//         ],
//         usp: "First report free – experience the value before you decide.",
//         buttonText: "Start membership",
//         popular: false,
//         mostPopular: false
//     },
//     {
//         title: "Local",
//         planId: '0002',
//         subtitle: "",
//         description: "Unlock precise demand forecasts for your city at a price lower than your morning coffee!",
//         price: "15.00",
//         currency: "kr. DKK",
//         period: "1 Months",
//         badge: {
//             text: "LOCAL",
//             color: "bg-orange-500"
//         },
//         features: [
//             "Covers: 1 city/area",
//             "Target group: Small businesses operating in a single geographic area."
//         ],
//         usp: "Cheaper than half a cup of coffee – and your city is covered.",
//         buttonText: "Start membership",
//         popular: true,
//         mostPopular: false
//     },
//     {
//         title: "Regional",
//         planId: '0003',
//         subtitle: "Most Popular",
//         description: "Master demand peaks across 3 cities with unbeatable value for growing chains!",
//         price: "395.00",
//         currency: "kr. DKK",
//         period: "1/Year",
//         badge: {
//             text: "VIP",
//             color: "bg-gradient-to-r from-purple-500 to-indigo-500"
//         },
//         features: [
//             "Covers: 3 cities/areas",
//             "Target group: Chains and companies operating across multiple cities."
//         ],
//         usp: "Best value-for-money, per city.",
//         buttonText: "Start membership",
//         popular: false,
//         mostPopular: true
//     },
//     {
//         title: "National",
//         planId: '0004',
//         subtitle: "",
//         description: "Conquer nationwide demand with scalable forecasts for your expanding empire!",
//         price: "100.00",
//         currency: "kr. DKK",
//         period: "1/Months",
//         badge: {
//             text: "N",
//             color: "bg-gradient-to-r from-red-500 to-orange-500"
//         },
//         features: [
//             "Covers: Up to 10 cities/areas",
//             "Target group: Larger chains, hotels, or businesses with broad geographic presence."
//         ],
//         usp: "The entire country in one package – ready to scale.",
//         buttonText: "Start membership",
//         popular: false,
//         mostPopular: false
//     }
// ];


const ActivateCard = () => {
    const [pricingData,setPricingData]=useState([])
    const [selectedPlan, setSelectedPlan] = useState(null);
    const scrollTargetRef = useRef(null);
    const { user } = use(AuthContext)
    const navigate = useNavigate("/")

    useEffect(() => {
        fetch('/pricingData.json')
            .then(res => res.json())
            .then(data => setPricingData(data))
            .catch(err => console.error(err));
    }, []);



    // console.log('acctivee card', user)

    const handleActive = (pricing, email) => {
        setSelectedPlan(pricing);

        // smooth scroll to bottom section
        setTimeout(() => {
            scrollTargetRef.current?.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }, 200);

        // Auto-send free plan to backend
        if (pricing.planId === "0001") {
            handleFreePlanSubmit(pricing, email);
        }
    };

    //  Free plan 
    const handleFreePlanSubmit = async (pricing, email) => {
        const today = new Date();
        const expire = new Date();
        expire.setDate(today.getDate() + 7);

        console.log(expire)

        const payload = {
            title: pricing.title,
            planId: pricing.planId,
            period: pricing.period,
            email: email,
            buyingDate: today.toISOString(),
            expireDate: expire.toISOString(),
        };

        try {
            const res = await fetch("http://localhost:3000/free", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });

            const data = await res.json();

            if (res.ok) {
                Swal.fire({
                    title: "Subscription Activated!",
                    text: `${pricing.title} plan is now active.`,
                    icon: "success",
                    timer: 2000,
                    showConfirmButton: false
                });
            } else {
                Swal.fire({
                    title: "Error!",
                    text: data.message || "Failed to activate subscription.",
                    icon: "error",
                    confirmButtonColor: "#d33"
                });
            }

            console.log("Free plan activated:", data);

        } catch (err) {
            console.error("Free plan activation failed:", err);

            Swal.fire({
                title: "Network Error!",
                text: "Could not connect to the server.",
                icon: "error",
                confirmButtonColor: "#d33"
            });
        }
    };
    // paid payment 
    const handlePaidPlanPayment = (id) => {
        // console.log(id)
            navigate(`/dashboard/payment/${id}`)
    };

    return (
        <div>
            <div className='md:w-10/12 w-full md:mx-auto grid md:grid-cols-2 gap-y-5 md:gap-x-20'>
                {
                    pricingData.map((pricing, index) => <div key={index} className="card md:w-96 bg-base-100 shadow-sm hover:shadow-2xl mb-10">
                        <div className="card-body  ">
                            <div className='flex justify-between'>
                                <span className="badge badge-md badge-warning">{pricing.period}</span>
                                {
                                    pricing.subtitle && <div className="badge badge-dash badge-primary">{pricing.subtitle}</div>
                                }
                            </div>
                            <div className="flex justify-between">
                                <h2 className="md:text-3xl text-2xl font-bold">{pricing.title}</h2>
                                <span className="text-xl">{pricing.price} {pricing.currency}</span>
                            </div>
                            {
                                pricing.description && <p className='text-gray-600'>{pricing.description}</p>
                            }
                            <ul className="mt-6 flex flex-col gap-2 text-xs">
                                {
                                    pricing.features.map((feature, index) => <li key={index}>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                        <span>{feature}</span>
                                    </li>)
                                }
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <span>{pricing.usp}</span>
                                </li>
                            </ul>
                            <div className="mt-6">
                                <button onClick={() => handleActive(pricing, user.email)} className="btn text-white  btn-block bg-[#00C853] hover:bg-[#00B140] hover:shadow-2xl">Activate</button>
                            </div>
                        </div>
                    </div>)
                }
            </div>
            {/* ---------- SUBSCRIPTION DETAILS SECTION ---------- */}
            <div ref={scrollTargetRef} className="mt-20 p-6 bg-base-200">

                {selectedPlan && (
                    <div className="max-w-xl mx-auto bg-white shadow-lg p-6 rounded-lg">
                        <h2 className="text-2xl font-bold mb-2">
                            Subscription Details — {selectedPlan.title}
                        </h2>

                        <p className="text-gray-700 mb-3">{selectedPlan.description}</p>

                        <p>
                            <strong>User:</strong> {user.displayName}
                        </p>
                        <p>
                            <strong>Price:</strong> {selectedPlan.price} {selectedPlan.currency}
                        </p>
                        <p>
                            <strong>Duration:</strong> {selectedPlan.period}
                        </p>

                        <ul className="mt-4">
                            {selectedPlan.features.map((f, i) => (
                                <li key={i}>✔ {f}</li>
                            ))}
                        </ul>

                        {/* Free plan → no payment button */}
                        {selectedPlan.planId === "0001" ? (
                            <p className="mt-6 text-green-600 font-semibold">
                                ✔ Free plan activated automatically
                            </p>
                        ) : (
                            <button
                                onClick={()=>handlePaidPlanPayment(selectedPlan.planId)}
                                className="btn mt-6 btn-primary w-full"
                            >
                                Proceed to Payment
                            </button>
                        )}
                    </div>
                )}

            </div>

        </div>
    );
};

export default ActivateCard;