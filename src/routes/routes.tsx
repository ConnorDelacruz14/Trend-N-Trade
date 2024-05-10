import React, { Suspense, lazy } from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from 'react-router-dom';

const Home = lazy(() => import('../pages/Home/Home'));
const Listing = lazy(() => import('../pages/Listing/Listing'));

const AppRoutes: React.FC = () => {
    return (
        <Router>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/Listing" element={<Listing />} />
                </Routes>
            </Suspense>
        </Router>
    );
};

export default AppRoutes;
