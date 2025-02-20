import React, { useEffect } from 'react'
import { Navigate } from 'react-router-dom';
import { route } from '../routes/RoutePath';
import Header from '../component/header';

const MainLayout = ({ children }) => {
    const token = localStorage.getItem('token');
    if (!token) return <Navigate to={route.login} replace />

    return (
        <div>
            <Header />
            {children}
        </div>
    )
}

export default MainLayout