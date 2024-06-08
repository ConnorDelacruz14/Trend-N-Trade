import { useEffect, useState } from 'react';
import Footer from "../../components/Footer/Footer.tsx";
import Header from "../../components/Header/Header.tsx";
import Sidebar from "../../components/Sidebar/sidebar.tsx";
import './purchases.css';
import { fetchData } from '../../api/index.ts';

interface Purchase {
    image: string;
    name: string;
    listingPrice: number;
    purchaseStatus: string;
}

const Purchases = () => {
    const [purchases, setPurchases] = useState<Purchase[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchPurchases = async () => {
            try {
                const data = await fetchData('/api/user/getPurchases', [], {}, 'GET');
                setPurchases(data);
            } catch (error) {
                setError('Login to get purchases');
            }
        };

        fetchPurchases();
    }, []);


    return (
        <>
            <Header />
            <div className="Container">
                <Sidebar />
                <section className="sect2">
                    <div className="transactions-container">
                        <h3 className="sidebar-title">Transactions</h3>
                        <div className="transactions-table">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Image</th>
                                        <th>Product Name</th>
                                        <th>Total</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {purchases.length > 0 ? (
                                      purchases.map((purchase, index) => (
                                          <tr key={index}>
                                              <td className="product-image"><img src={purchase.image} alt="Product" /></td>
                                              <td className="product-name">{purchase.name}</td>
                                              <td className="product-total">${purchase.listingPrice}</td>
                                              <td className="product-status">{purchase.purchaseStatus}</td>
                                          </tr>
                                      ))
                                  ) : (
                                      <tr>
                                          <td>No purchases found. Or Log in Again</td>
                                      </tr>
                                  )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>
            </div>
            <Footer /> 
        </>
    );
};

export default Purchases;