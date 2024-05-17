
import Header from "../../components/Header/Header.tsx";
import './purchases.css';

interface Purchase {
  image: string;
  name: string;
  price: number;
  quantity: number;
  total: number;
  status: string;
}

const test_purchases: Purchase[] = [
  {
    image: "https://media-photos.depop.com/b1/43110874/1865488851_9a0a41a6a860499987d255dee637bb85/P0.jpg",
    name: "Disney Men's White T-shirt",
    price: 35.00,
    quantity: 1,
    total: 35.00,
    status: "Shipped",
  },
  {
    image: "https://media-photos.depop.com/b1/43110874/1865488851_9a0a41a6a860499987d255dee637bb85/P0.jpg",
    name: "Disney Men's White T-shirt",
    price: 35.00,
    quantity: 1,
    total: 35.00,
    status: "Shipped",
  }

  
];

const Purchases = () => {

  return (
    <div className="purchases-page-container">
      <Header />

      <div className="transactions-container">
        <h3 className="sidebar-title">Transactions</h3>
        <div className="transactions-table">
          <table>
            <thead>
              <tr>
                <th>Image</th>
                <th>Product Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {test_purchases.map((purchase, index) => (
                <tr key={index}>
                  <td className="product-image"><img src={purchase.image} alt="Product Image" /></td>
                  <td className="product-name">{purchase.name}</td>
                  <td className="product-price">${purchase.price.toFixed(2)}</td>
                  <td className="product-quantity">{purchase.quantity}</td>
                  <td className="product-total">${purchase.total.toFixed(2)}</td>
                  <td className="product-status">{purchase.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Purchases;