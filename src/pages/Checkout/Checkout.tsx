// src/pages/Checkout.tsx

import Header from '../../components/Header/Header.tsx';
import Footer from '../../components/Footer/Footer.tsx';
import './checkout.css';

interface Item {
    image: string;
    title: string;
    price: string;
}

const testItem: Item[] = [
    {
        image: "https://media-photos.depop.com/b1/44652577/1852358784_1d1b614b6af34bbab81f515704dd0dbe/P0.jpg",
        title: "Vintage Y2K Swim Shorts",
        price: "39.99"
    }
];

const Checkout = () => {
    return (
        <>
            <Header />
            <div className="card">
                <div className="checkout-page">
                    <div className="order-summary">
                        <h2>Order Summary</h2>
                        {testItem.map((trade, index) => (
                            <div className="product" key={index}>
                                <img className="product-image" src={trade.image} alt="Product Image" />
                                <div className="product-info">
                                    <p className="product-title">{trade.title}</p>
                                    <p className="product-price">${trade.price}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="shipping-payment-info">
                        <h2>Shipping Information</h2>
                        <form>
                            <div className="form-group">
                                <label>Name</label>
                                <input type="text" name="name" />
                            </div>
                            <div className="form-group">
                                <label>Address</label>
                                <input type="text" name="address" />
                            </div>
                            <div className="form-group">
                                <label>City</label>
                                <input type="text" name="city" />
                            </div>
                            <div className="form-row">
                                <div className="form-group">
                                    <label>State</label>
                                    <input type="text" name="state" />
                                </div>
                                <div className="form-group">
                                    <label>ZIP Code</label>
                                    <input type="text" name="zip" />
                                </div>
                            </div>
                            <button id="order-button" type="submit">Place Order</button>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Checkout;
