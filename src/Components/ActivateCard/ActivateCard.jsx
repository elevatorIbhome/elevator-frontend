import React from 'react';
const pricingData = [
    {
        title: "Intro",
        subtitle: "Free",
        description:"",
        price: "0.00",
        currency: "kr. DKK",
        period: "7 Days",
        badge: {
            text: "FREE TRIAL",
            color: "bg-gradient-to-r from-pink-500 to-red-500"
        },
        features: [
            "Covers: 1 city/area",
            "Target group: All businesses curious to try without commitment."
        ],
        usp: "First report free – experience the value before you decide.",
        buttonText: "Start membership",
        popular: false,
        mostPopular: false
    },
    {
        title: "Local",
        subtitle: "",
         description:"Unlock precise demand forecasts for your city at a price lower than your morning coffee!",
        price: "15.00",
        currency: "kr. DKK",
        period: "1 Months",
        badge: {
            text: "LOCAL",
            color: "bg-orange-500"
        },
        features: [
            "Covers: 1 city/area",
            "Target group: Small businesses operating in a single geographic area."
        ],
        usp: "Cheaper than half a cup of coffee – and your city is covered.",
        buttonText: "Start membership",
        popular: true,
        mostPopular: false
    },
    {
        title: "Regional",
        subtitle: "Most Popular",
        description:"Master demand peaks across 3 cities with unbeatable value for growing chains!",
        price: "395.00",
        currency: "kr. DKK",
        period: "1/Year",
        badge: {
            text: "VIP",
            color: "bg-gradient-to-r from-purple-500 to-indigo-500"
        },
        features: [
            "Covers: 3 cities/areas",
            "Target group: Chains and companies operating across multiple cities."
        ],
        usp: "Best value-for-money, per city.",
        buttonText: "Start membership",
        popular: false,
        mostPopular: true
    },
    {
        title: "National",
        subtitle: "",
        description:"Conquer nationwide demand with scalable forecasts for your expanding empire!",
        price: "100.00",
        currency: "kr. DKK",
        period: "1/Months",
        badge: {
            text: "N",
            color: "bg-gradient-to-r from-red-500 to-orange-500"
        },
        features: [
            "Covers: Up to 10 cities/areas",
            "Target group: Larger chains, hotels, or businesses with broad geographic presence."
        ],
        usp: "The entire country in one package – ready to scale.",
        buttonText: "Start membership",
        popular: false,
        mostPopular: false
    }
];


const ActivateCard = () => {
    return (
        <div>
            <div className='w-10/12 mx-auto grid md:grid-cols-2 gap-y-5'>
                {
                    pricingData.map((pricing, index) => <div key={index} className="card w-96 bg-base-100 shadow-sm hover:shadow-2xl mb-10">
                        <div className="card-body  ">
                            <div className='flex justify-between'>
                                <span className="badge badge-md badge-warning">{pricing.period}</span>
                                {
                                    pricing.subtitle && <div className="badge badge-dash badge-primary">{pricing.subtitle}</div>
                                }
                                </div>
                            <div className="flex justify-between">
                                <h2 className="text-3xl font-bold">{pricing.title}</h2>
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
                                <button className="btn text-white  btn-block bg-[#00C853] hover:bg-[#00B140] hover:shadow-2xl">Activate</button>
                            </div>
                        </div>
                    </div>)
                }
            </div>

        </div>
    );
};

export default ActivateCard;