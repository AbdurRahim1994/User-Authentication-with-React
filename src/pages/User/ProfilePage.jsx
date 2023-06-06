import React, { Suspense, lazy } from 'react';
import MasterLayout from '../../components/MasterLayout/MasterLayout'
import LazyLoader from '../../components/MasterLayout/LazyLoader'
const Profile = lazy(() => import('../../components/User/Profile'))

const ProfilePage = () => {
    return (
        <div>
            <MasterLayout>
                <Suspense fallback={<LazyLoader></LazyLoader>}>
                    <Profile></Profile>
                </Suspense>
            </MasterLayout>
        </div>
    );
};

export default ProfilePage;