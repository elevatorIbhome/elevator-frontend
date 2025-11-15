import React, { use } from 'react';
import { AuthContext } from '../Context/AuthContext/AuthContext';
import { Navigate } from 'react-router';

const PrivateRoute = ({ children }) => {
    const { user, loading } = use(AuthContext);


    if (loading) {
        return <div className="flex items-center justify-center min-h-screen">
            <span className="loading loading-spinner loading-xl"></span>
        </div>;
    }

    if (!user) {
        return <Navigate to='/login'></Navigate>
    }

    return children
};

export default PrivateRoute;