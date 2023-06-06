import React, { Suspense, lazy } from 'react';
import LazyLoader from '../../components/MasterLayout/LazyLoader'
const Registration = lazy(() => import('../../components/User/Registration'))

const RegistrationPage = () => {
    return (
        <div>
            <Suspense fal={<LazyLoader></LazyLoader>}>
                <Registration></Registration>
            </Suspense>
        </div>
    );
};

export default RegistrationPage;