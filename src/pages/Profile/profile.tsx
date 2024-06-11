import { useState, useEffect } from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import './profile.css';
import { fetchData } from "../../api";

interface Listing {
    id: string;
    image: string;
    name: string;
    listingPrice: number;
    purchaseStatus: string;
}

const HomeFeed = () => {
    const [listings, setListings] = useState<Listing[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        try {
            fetchData('/api/user/getSales', [], {}, 'GET')
                .then(response => {
                    setListings(response);
                });
        } catch (error) {
            setError('Failed to fetch listings. Please login to view your listings.');
        }
    }, []);

    return (
        <div>
            <Header />
            <main>
                <section className="desc">
                    {/* Add any additional description or content here */}
                </section>
                <section className="listing">
                    <h4>My Listings</h4>
                    {error && <p className="error">{error}</p>}
                    <ul>
                        {listings.map(listing => (
                            <a href={"/listing/" + listing.id} key={listing.id}>
                                <li>
                                    <img src={listing.image} alt={listing.name} height="200px" width="200px" />
                                    {listing.name} <br /> ${listing.listingPrice}
                                </li>
                            </a>
                        ))}
                    </ul>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default HomeFeed;