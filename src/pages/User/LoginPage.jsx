import React, { Suspense } from 'react';
import LazyLoader from '../../components/MasterLayout/LazyLoader';
import { lazy } from 'react';
const Login = lazy(() => import('../../components/User/Login'))

const LoginPage = () => {
    return (
        <div>
            <Suspense fallback={<LazyLoader></LazyLoader>}>
                <Login></Login>
            </Suspense>
        </div>
    );
};

export default LoginPage;