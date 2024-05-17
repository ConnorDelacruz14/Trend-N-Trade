import { Link } from 'react-router-dom';
import './sidebar.css';

const Sidebar = () => {
  return (
    <section className="sect1">
      <div className="main-sec1">
        <h3>Account</h3>
        <h4>Transactions</h4>
        <div className="inner-sec1">
          <Link to="/purchases"><span>Purchases and Sales</span></Link>
        </div>
        <div className="inner-sec1">
          <Link to="/payment"><span>Payment Methods</span></Link>
        </div>
        <div className="inner-sec1">
          <Link to="/trades"><span>My Trades</span></Link>
        </div>
        <div className="inner-sec1">
          <Link to="/offers"><span>My Offers</span></Link>
        </div>
        <h4>Saves</h4>
        <div className="inner-sec1">
          <span>Saved items</span>
        </div>
        <h4>Profile Info</h4>
        <div className="inner-sec1">
          <Link to="/edit"><span>Edit Profile</span></Link>

        </div>
      </div>
    </section>
  );
};

export default Sidebar;