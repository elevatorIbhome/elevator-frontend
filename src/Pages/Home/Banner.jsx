import React from 'react';
import AItools from "../../assets/AI Tools.json"
import Lottie from 'lottie-react';
import { IoCheckmarkDoneSharp } from 'react-icons/io5';
import Button from '../../Components/Button/Button';

const Banner = () => {
    return (
        <div>
            <div className="hero bg-base-200 max-h-screen my-10">
                <div className="hero-content flex-col lg:flex-row-reverse mx-auto">
                    <div >
                        {/* Lottie animation */}
                        <Lottie
                            animationData={AItools}
                            loop={true}
                            className="w-80 h-72 md:ml-20"
                        />
                    </div>
                    <div className='md:w-[50%]'>
                        <h1 className="text-2xl font-bold">Plan Smart, Profit Big – AI-Powered Demand Forecasts!</h1>
                        <p className="pt-6 pb-3 text-gray-600">
                            Our subscription-based solution analyzes local events like concerts and conferences to predict demand peaks.Affordable, accurate, and professional – transform your business planning today
                        </p>
                        <div className='mb-6'>
                            <h4 className='flex items-center gap-2'>
                                <IoCheckmarkDoneSharp size={20} /><span>AI-Driven Event Detection</span>
                            </h4>
                            <h4 className='flex items-center gap-2'>
                                <IoCheckmarkDoneSharp  size={20} /><span>Smart Calendar Forecasts</span>
                            </h4>
                            <h4 className='flex items-center gap-2'>
                                <IoCheckmarkDoneSharp  size={20} /><span>Customizable Reports for Your City </span>
                            </h4>
                            <h4 className='flex items-center gap-2'>
                                <IoCheckmarkDoneSharp  size={20} /><span>Weekly Email Alerts</span>
                            </h4>
                            <h4 className='flex items-center gap-2'>
                                <IoCheckmarkDoneSharp /><span>Affordable Subscription Plans</span>
                            </h4>
                            <h4 className='flex items-center gap-2'>
                                <IoCheckmarkDoneSharp  size={20} /><span>AI-Driven Event Detection</span>
                            </h4>
                        </div>
                        <Button></Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;