import Footer from '../../components/Footer/Footer'; // Import the Footer component
import Header from '../../components/Header/Header';
import Sidebar from '../../components/Sidebar/sidebar';
import "./Payment.css";

const Payment = () => {
  return (
    <>
      <Header />
      <div className="Container">
        <Sidebar />
        <section className="sect2">
          <h2>Payment Methods</h2>
          <div>
            <div className="balance">
              <span>
                <b>Balance</b>
              </span>
              <br />
              <br />
              <span>$0.00</span>
            </div>
            <div className="payment">
              <b>Payment Methods</b>
              <a href="/Payment">
                <b>Add credits/debit card</b>
              </a>
            </div>
          </div>
        </section>
      </div>
      <Footer /> 
    </>
  );
};

export default Payment;