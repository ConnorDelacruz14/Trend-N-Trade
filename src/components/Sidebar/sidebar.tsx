import './sidebar.css';

const Sidebar = () => {
  return (
    <section className="sect1">
      <div className="main-sec1">
        <h3>Account</h3>
        <h4>Transactions</h4>
        <div className="inner-sec1">
          <span>Purchases & Sales</span>
        </div>
        <div className="inner-sec1">
          <span>Payment Methods</span>
        </div>
        <h4>Saves</h4>
        <div className="inner-sec1">
          <span>Saved items</span>
        </div>
      </div>
    </section>
  );
};

export default Sidebar;