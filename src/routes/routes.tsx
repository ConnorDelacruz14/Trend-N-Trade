import React, { Suspense, lazy } from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from 'react-router-dom';

const Home = lazy(() => import('../pages/Home/Home'));
const Listing = lazy(() => import('../pages/Listing/Listing'));
const SignUp = lazy(() => import('../pages/SignUp/SignUp'));
const Login = lazy(() => import('../pages/Login/Login'))
const EditProfile = lazy(() => import('../pages/EditProfile/EditProfile'))

const AppRoutes: React.FC = () => {
    return (
        <Router>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/listing" element={<Listing />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/edit" element={<EditProfile />} />
                    <Route path="/login" element={<Login/>}></Route>
                </Routes>
            </Suspense>
        </Router>
    );
};

export default AppRoutes;
