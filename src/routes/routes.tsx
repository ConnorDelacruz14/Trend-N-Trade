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
const Cart= lazy(() => import('../pages/Cart/Cart'));
const EditProfile = lazy(() => import('../pages/EditProfile/EditProfile'))
const Search = lazy(() => import('../pages/Search/Search'))
const Purchases = lazy(() => import('../pages/Purchases/Purchases'))
// const Checkout = lazy(() => import('../pages/Checkout/Checkout'))
const SavedItems = lazy(() => import('../pages/SavedItems/SavedItems'))
const Offers = lazy(() => import('../pages/Offers/Offers'))
const Trades = lazy(() => import('../pages/Trades/Trades'))


const AppRoutes: React.FC = () => {
    return (
        <Router>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/listing/:listingId" element={<Listing />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/login" element={<Login/>}></Route>
                    <Route path="/Home" element={<Profile />} />
                    <Route path="/About" element={<About />} />
                    <Route path="/Payment" element={<Payment />} />
                    <Route path="/Contact" element={<Contact />} />
                    <Route path="/Cart" element={<Cart />} />
                    <Route path="/Help" element={<Help />} />
                    <Route path="/Profile" element={<Profile />} />
                    <Route path="/edit" element={<EditProfile />} />
                    <Route path="/search" element={<Search />} />
                    <Route path="/purchases" element={<Purchases/>} />
                    <Route path="/offers" element={<Offers/>} />
                    <Route path="/trades" element={<Trades/>} />
                    <Route path="/SavedItems" element={<SavedItems/>} />
                    {/*<Route path="/Checkout" element={<Checkout/>} />*/}


                </Routes>
            </Suspense>
        </Router>
    );
};

export default AppRoutes;
