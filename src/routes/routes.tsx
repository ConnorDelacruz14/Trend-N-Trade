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
const Checkout = lazy(() => import('../pages/Checkout/Checkout'))
const SavedItems = lazy(() => import('../pages/SavedItems/SavedItems'))
const Offers = lazy(() => import('../pages/Offers/Offers'))
const Trades = lazy(() => import('../pages/Trades/Trades'))
const EditListing = lazy(() => import('../pages/EditListing/EditListing'))

const AppRoutes: React.FC = () => {
    return (
        <Router>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/listing/:listingId" element={<Listing />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/login" element={<Login/>}></Route>
                    <Route path="/home" element={<Profile />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/payment" element={<Payment />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/help" element={<Help />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/edit" element={<EditProfile />} />
                    <Route path="/search" element={<Search />} />
                    <Route path="/purchases" element={<Purchases/>} />
                    <Route path="/offers" element={<Offers/>} />
                    <Route path="/trades" element={<Trades/>} />
                    <Route path="/saveditems" element={<SavedItems/>} />
                    <Route path="/checkout" element={<Checkout/>} />
                    <Route path="/edit-listing" element={<EditListing />} />
                </Routes>
            </Suspense>
        </Router>
    );
};

export default AppRoutes;
