import React from 'react';
import PropTypes from 'prop-types';

import { Outlet, Navigate } from 'react-router-dom';


export const OnlyPublicRoute = ({
    isAuthenticated,
}) => {

    return (
        !isAuthenticated ? <Outlet/> : <Navigate to="/"/>
    )
}

OnlyPublicRoute.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
}