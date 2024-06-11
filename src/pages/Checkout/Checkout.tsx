import React, { useState, useEffect } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import './checkout.css';
import { fetchData } from '../../api';
import { useLocation} from 'react-router-dom';



const Checkout: React.FC = () => {

    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const listingId = queryParams.get('listingId');
    //console.log(listingId);
    
    const [image, setImage] = useState<string>('');
    const [name, setName] = useState<string>('');
    const [listingPrice, setListingPrice] = useState<string>('');

    const listingIdData = {
        listingId: listingId
      };

    useEffect(() => {
        const fetchListingData = async () => {
            try {
                console.log('ok');
                console.log(listingIdData);
                const response = await fetchData('/api/listing/getListingCheckout', [], listingIdData, 'PUT');
            
                setImage(response.image);
                setName(response.name);
                setListingPrice(response.listingPrice);
              
            } catch (error) {
                console.error('Error fetching listing data:', error);
            }
        };

        if (listingId) {
            fetchListingData();
        }
    }, [listingId]);

    const handlePlaceOrder = async () => {
        try {
            const response = await fetchData('/api/listing/checkoutListing', [], { listingId }, 'PUT');
            if (response.ok) {
                alert('Order placed successfully!');
                // Redirect or perform further actions as needed
            } else {
                console.error('Failed to place order:', response);
            }
        } catch (error) {
            console.error('Error placing order:', error);
        }
    };

    return (
        <>
            <Header />
            <div className="card">
                <div className="checkout-page">
                    <div className="order-summary">
                        <h2>Order Summary</h2>
                        <div className="product">
                            <img className="product-image" src={image} alt="Product Image" />
                            <div className="product-info">
                                <p className="product-title">{name}</p>
                                <p className="product-price">${listingPrice}</p>
                            </div>
                        </div>
                    </div>
                    <div className="shipping-payment-info">
                        <h2>Shipping Information</h2>
                        <form>
                            <div className="form-group">
                                <label>Name</label>
                                <input type="text" name="name" required />
                            </div>
                            <div className="form-group">
                                <label>Address</label>
                                <input type="text" name="address" required />
                            </div>
                            <div className="form-group">
                                <label>City</label>
                                <input type="text" name="city" required />
                            </div>
                            <div className="form-row">
                                <div className="form-group">
                                    <label>State</label>
                                    <input type="text" name="state" required />
                                </div>
                                <div className="form-group">
                                    <label>ZIP Code</label>
                                    <input type="text" name="zip" required />
                                </div>
                            </div>
                            <button id="order-button" type="button" onClick={handlePlaceOrder}>Place Order</button>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Checkout;
