import { useEffect, useState } from 'react';
import Footer from "../../components/Footer/Footer.tsx";
import Header from "../../components/Header/Header.tsx";
import Sidebar from "../../components/Sidebar/sidebar.tsx";
import './purchases.css';
import { fetchData } from '../../api/index.ts';

interface Purchase {
    id: string;
    image: string;
    name: string;
    listingPrice: number;
    purchaseStatus: string;
}



const Purchases = () => {
    const [purchases, setPurchases] = useState<Purchase[]>([]);
    const [sales, setSales] = useState<Purchase[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchPurchases = async () => {
            try {
                const data = await fetchData('/api/user/getPurchases', [], {}, 'GET');
                setPurchases(data);
                const dataSales = await fetchData('/api/user/getSales', [], {}, 'GET');
                const filteredSales = (dataSales as Purchase[]).filter(listing => listing.purchaseStatus !== 'notPurchased');
                setSales(filteredSales);
            } catch (error) {
                setError('Login to get purchases');
            }
        };

        fetchPurchases();
    }, []);

    const handleStatusChange = async (index: number, newStatus: string) => {
        const sale = sales[index];

        // Optimistically update UI
        setSales(prevSales => {
            const updatedSales = [...prevSales];
            updatedSales[index].purchaseStatus = newStatus;
            return updatedSales;
        });

        try {
            // Update status via API
            await fetchData('/api/listing/editStatus', [], { id: sale.id, purchaseStatus: newStatus }, 'PUT');
            console.log('Status updated successfully');
        } catch (error) {
            console.error('Error updating status:', error);

            // Revert UI update on error
            setSales(prevSales => {
                const updatedSales = [...prevSales];
                updatedSales[index].purchaseStatus = sale.purchaseStatus;
                return updatedSales;
            });
        }
    };


    return (
        <>
            <Header />
            <div className="Container">
                <Sidebar />
                <section className="sect2">
                    <div className="transactions-container">
                        <h3 className="sidebar-title">Purchases</h3>
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
                                          <td>No purchases found</td>
                                      </tr>
                                  )}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="transactions-container">
                        <h3 className="sidebar-title">Sales</h3>
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
                                    {sales.length > 0 ? (
                                      sales.map((sale, index) => (
                                          <tr key={index}>
                                              <td className="product-image"><img src={sale.image} alt="Product" /></td>
                                              <td className="product-name">{sale.name}</td>
                                              <td className="product-total">${sale.listingPrice}</td>
                                              <td className="product-status">
                                                    <select
                                                        value={sale.purchaseStatus}
                                                        onChange={(e) => handleStatusChange(index, e.target.value)}
                                                    >
                                                        <option value="purchased">Purchased</option>
                                                        <option value="shipped">Shipped</option>
                                                        <option value="arrived">Arrived</option>
                                                    </select>
                                                </td>
                                          </tr>
                                      ))
                                  ) : (
                                      <tr>
                                          <td>No sales found</td>
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