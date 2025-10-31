import React from 'react';
import { HiOutlineFolderOpen, HiOutlineShieldCheck, HiPaperAirplane } from "react-icons/hi";

const features = [
    {
        icon: <HiOutlineFolderOpen className="w-5 h-5" />,
        title: "Work environment",
        description:
            "Join a dynamic, lean team where innovation thrives, offering you a fast-paced setting to collaborate, analyze AI-driven forecasts, and present actionable insights directly to business leaders—your impact starts immediately!",
    },
    {
        icon: <HiOutlineShieldCheck className="w-5 h-5" />,
        title: "High quality Co-Living spaces",
        description:
            "Experience cutting-edge AI that transforms local event data into precise, two-month demand forecasts, empowering you with weekly calendars and percentage insights to optimize staffing and maximize profits across your chosen cities!",
    },
    {
        icon: <HiOutlineShieldCheck className="w-5 h-5" />,
        title: "Simple and all-inclusive",
        description:
            "Unlock scalable plans from single-city trials to nationwide coverage, starting at just 15 DKK/month, with secure access to tailored reports and tools that drive growth and efficiency for your business!",
    },
];

const WhyJoinUsPage = () => {
    return (
        <section className="py-16 px-4 max-w-7xl mx-auto">
            {/* Feature Cards */}
            <div className="grid md:grid-cols-3 gap-8 mb-20">
                {features.map((feature, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-start space-y-3 p-6 bg-base-100 rounded-xl shadow-sm border border-base-200 hover:shadow-md transition-shadow"
                    >
                        <div className="flex items-center gap-3">
                            {feature.icon}
                            <h3 className="text-lg font-semibold">{feature.title}</h3>
                        </div>
                        <p className="text-base-content/80 text-sm leading-relaxed">
                            {feature.description}
                        </p>
                    </div>
                ))}
            </div>

            {/* Paper Plane Animation */}
            <div className="flex justify-center my-24">
                <div className="relative">
                    {/* Pulsing circle */}
                    <div className="absolute -left-12 top-3 w-24 h-24 border-2 border-primary/20 rounded-full animate-ping"></div>
                    {/* Paper plane */}
                    <HiPaperAirplane className="w-14 h-14 text-[#00C853] rotate-12 animate-bounce" />
                </div>
            </div>

            {/* Large CTA */}
            <div className="text-center max-w-5xl mx-auto mt-16">
                <h1 className="text-2xl md:text-2xl lg:text-4xl font-bold leading-tight text-base-content">
                    We’re always seeking passionate restaurant owners to master demand with AI forecasts—
                    <br className="hidden md:block" />
                    get in touch if you’re ready to boost profits and staffing!
                </h1>
            </div>
        </section>
    );
};

export default WhyJoinUsPage;