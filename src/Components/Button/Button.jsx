import React from 'react';
import { HiArrowRight } from 'react-icons/hi';

const Button = () => {
    return (
        <button className="btn  roboto bg-[#00C853] hover:bg-[#00B140] text-white border-none rounded-lg flex items-center gap-2 px-6 py-3 font-medium">
            Learn more
            <HiArrowRight className="w-5 h-5" />
        </button>
    );
};

export default Button;