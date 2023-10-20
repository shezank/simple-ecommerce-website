import React, { useContext } from 'react';
import { AuthContext } from '../../Sharde/AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {users, loading} = useContext(AuthContext);
    const location = useLocation();
    if(loading){
       return <span className="loading loading-spinner loading-lg"></span>
    }
    else if(users){
        return children ;
    }
    return <Navigate state={location.pathname} to={'/login'}></Navigate>;
};

export default PrivateRoute;