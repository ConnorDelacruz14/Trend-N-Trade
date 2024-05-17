import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

import './profile.css';

export default function Home() {
  return (
    <div>
      <>
      <Header />
        <main>
          <section className="desc">
            <ul>
              <div>
                <li>
                  <img src="/img/profile.jpeg" alt="profile" />
                </li>
              </div>
              <div className="details">
                <li>Name</li>
                <li>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i> 5.0
                </li>
                <li>
                  <button type="button">Edit Profile</button>
                </li>
              </div>
              <div>
                <li>
                  <textarea placeholder="Description"></textarea>
                </li>
              </div>
            </ul>
          </section>
          <section className="listing">
            <h4>Listing</h4>
            <ul>
              <li>
                <img src="/img/shirt1.jpg" alt="" />
                Casual Shirt - Green <br /> $9.99{" "}
              </li>
              <li>
                <img src="/img/shirt2.jpeg" alt="" />
                Tee Shirt - Blue <br /> $6.99
              </li>
              <li>
                <img src="/img/pants1.jpeg" alt="" />
                Cotton Pants - Khaki <br /> $15.99
              </li>
              <li>
                <img src="/img/socks.jpg" alt="" />
                Full Socks - Yellow <br /> $4.99
              </li>
            </ul>
            <ul>
              <li>
                <img src="/img/pants2.jpeg" alt="" />
                Cotton Pants - Navy <br /> $17.99
              </li>
              <li>
                <img src="/img/watch1.jpeg" alt="" />
                Smart Watch Pro - Blue
                <br /> $49.99
              </li>
              <li>
                <img src="/img/shoes1.jpg" alt="" />
                Hoka Shoes <br /> $89.99
              </li>
              <li>
                <img src="/img/shoes2.jpg" alt="" />
                Sky Shoes - Sky Blue <br /> $99.99
              </li>
            </ul>
          </section>
        </main>
        <Footer />
      </>
    </div>
  );
}
