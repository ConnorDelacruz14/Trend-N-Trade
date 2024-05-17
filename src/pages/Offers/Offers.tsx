
import Footer from "../../components/Footer/Footer.tsx";
import Header from "../../components/Header/Header.tsx";
import Sidebar from "../../components/Sidebar/sidebar.tsx";
import './offers.css';

interface Offer {
    image: string;
    name: string;
    price: number;
    offer_price: number;
    offerStatus: string;
    expiresIn: string;
}

const test_purchases: Offer[] = [
    {
        image: "https://media-photos.depop.com/b1/44652577/1852358784_1d1b614b6af34bbab81f515704dd0dbe/P0.jpg",
        name: "Vintage Y2K Swim Shorts",
        price: 35.00,
        offer_price: 30.00,
        offerStatus: "Pending",
        expiresIn: "24hr 59min",
    },
    {
        image: "https://media-photos.depop.com/b1/48270173/1842450567_5a4bb8a61c994a12b5a2c78a8edf1c75/P0.jpg",
        name: "Y2K Grunge Black Baggy Embroidered Jeans",
        price: 35.00,
        offer_price: 30.00,
        offerStatus: "Accepted",
        expiresIn: "12hr 15min",
    }


];

const Offers = () => {

    return(
        <>
            <Header />
            <div className="Container">
                <Sidebar />
                <section className="sect2">
                    <div className="transactions-container">
                        <h3 className="sidebar-title">My Offers</h3>
                        <div className="transactions-table">
                            <table>
                                <thead>
                                <tr>
                                    <th>Image</th>
                                    <th>Product Name</th>
                                    <th>List Price</th>
                                    <th>Offer Price</th>
                                    <th>Offer Status</th>
                                    <th>Expires In</th>
                                </tr>
                                </thead>
                                <tbody>
                                {test_purchases.map((purchase, index) => (
                                    <tr key={index}>
                                        <td className="product-image"><img src={purchase.image} alt="Product Image"/>
                                        </td>
                                        <td className="product-name">{purchase.name}</td>
                                        <td className="product-price">${purchase.price.toFixed(2)}</td>
                                        <td className="product-price">${purchase.offer_price.toFixed(2)}</td>
                                        <td className="product-status">{purchase.offerStatus}</td>
                                        <td className="product-status">{purchase.expiresIn}</td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </>
    )

};

export default Offers;