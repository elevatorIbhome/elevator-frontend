import React from 'react';
import { FcGoogle } from 'react-icons/fc';

const GoogleLogin = () => {
    return (
        <button className="btn btn-outline w-full flex items-center justify-center gap-2">
                <FcGoogle size={20} />
                Login with Google
              </button>
    );
};

export default GoogleLogin;