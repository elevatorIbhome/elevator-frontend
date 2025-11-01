import React from 'react';

const AboutBanner = () => {
    return (
        <div className="hero bg-base-200 md:my-10">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img
                    src="https://i.ibb.co.com/8DKZpLTj/img11.jpg"
                    className="md:max-w-md rounded-lg shadow-2xl"
                />
                <div>
                    <h1 className="md:text-5xl text-2xl font-bold text-center">About</h1>
                    <p className="md:py-6 py-3 text-gray-600">
                        We simplify demand forecasting, empowering restaurants and service businesses to break from tradition, seize every opportunity, and transform their operations. Our AI-driven insights cut through market complexity, delivering precise, actionable forecasts that optimize staffing and boost profits across Denmark and beyond
                        .
                    </p>
                  
                </div>
            </div>
        </div>
    );
};

export default AboutBanner;