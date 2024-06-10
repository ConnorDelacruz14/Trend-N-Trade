import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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
        const fetchListings = async () => {
            try {
                const data = await fetchData('/api/user/getSales', [], {}, 'GET');
                const filteredData = (data as Listing[]).filter(listing => listing.purchaseStatus == 'notPurchased');
                setListings(filteredData);
            } catch (error) {
                setError('Failed to fetch listings. Please login to view your listings.');
            }
        };

        fetchListings();
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
                            <li key={listing.id}>
                                <img src={listing.image} alt={listing.name} />
                                {listing.name} <br /> ${listing.listingPrice}
                            </li>
                        ))}
                    </ul>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default HomeFeed;