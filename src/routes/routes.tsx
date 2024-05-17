import React, { Suspense, lazy } from 'react';
import {
    Route,
    BrowserRouter as Router,
    Routes,
} from 'react-router-dom';

const Home = lazy(() => import('../pages/Home/Home'));
const Listing = lazy(() => import('../pages/Listing/Listing'));
const SignUp = lazy(() => import('../pages/SignUp/SignUp'));
const Login = lazy(() => import('../pages/Login/Login'));
const About = lazy(() => import('../pages/About/About'));
const Payment = lazy(() => import('../pages/Payment/Payment'));
const Contact = lazy(() => import('../pages/Contact/Contact'));
const Help= lazy(() => import('../pages/Help/Help'));
const Profile= lazy(() => import('../pages/Profile/profile'));



const AppRoutes: React.FC = () => {
    return (
        <Router>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/listing" element={<Listing />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/login" element={<Login/>}></Route>
                    <Route path="/Home" element={<Profile />} />
                    <Route path="/About" element={<About />} />
                    <Route path="/Payment" element={<Payment />} />
                    <Route path="/Contact" element={<Contact />} />
                    <Route path="/Cart" element={<Home />} />
                    <Route path="/Help" element={<Help />} />
                    <Route path="/Profile" element={<Profile />} />


                </Routes>
            </Suspense>
        </Router>
    );
};

export default AppRoutes;
