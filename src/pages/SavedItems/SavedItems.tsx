import { useEffect, useState } from 'react';
import Footer from "../../components/Footer/Footer.tsx";
import Header from "../../components/Header/Header.tsx";
import Sidebar from "../../components/Sidebar/sidebar.tsx";
import "../../pages/Purchases/purchases.css";
import { fetchData } from '../../api';

interface Save {
    id: string;
    image: string;
    name: string;
    listingPrice: number;
    purchaseStatus: string;
}



const SavedItems = () => {
    const [saves, setSaves] = useState<Save[]>([]);

    useEffect(() => {
        const fetchPurchases = async () => {
            try {
                const data = await fetchData('/api/user/getSaves', [], {}, 'GET');
                setSaves(data);
            } catch (error) {
                alert(error)
            }
        };

        fetchPurchases().then(() => {});
    }, []);


    return (
        <>
            <Header />
            <div className="Container">
                <Sidebar />
                <section className="sect2">
                    <div className="transactions-container">
                        <h3 className="sidebar-title">Saves</h3>
                        <div className="transactions-table">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Image</th>
                                        <th>Product Name</th>
                                        <th>Price</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {saves.length > 0 ? (
                                      saves.map((saves, index) => (
                                          <tr key={index}>
                                              <td className="product-image"><img src={saves.image} alt="Product" /></td>
                                              <td className="product-name">{saves.name}</td>
                                              <td className="product-total">${saves.listingPrice}</td>
                                              <td className="product-status">{saves.purchaseStatus}</td>
                                          </tr>
                                      ))
                                  ) : (
                                      <tr>
                                          <td>No saves found</td>
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

export default SavedItems;