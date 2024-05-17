import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

import "./About.css";

export default function About() {
  return (
    <div>
      <Header />
      <main>
        <section className="About">
          <div className="Description">
            <div>
              <h2>About Trend N Trade</h2>
              <p>
                Welcome to TNT, where explosive deals meet personalized shopping
                experiences! TNT, short for Trend N Trade, is not just another
                online marketplace – it's a dynamic platform designed to
                revolutionize the way you shop, sell, and trade new and used
                items!
              </p>
            </div>
            <div>
              <h2>Our Commitment</h2>
              <ul>
                <li>
                  User Satisfaction: Your satisfaction is our top priority.
                  We're dedicated to providing you with a seamless and enjoyable
                  shopping experience, from start to finish.
                </li>
                <li>
                  Security and Trust: We take your security and privacy
                  seriously. With robust security measures in place, you can
                  shop with confidence, knowing that your personal information
                  is safe and secure.
                </li>
                <li>
                  Innovation: We're constantly evolving to meet your needs. From
                  introducing new features to improving existing ones, we're
                  committed to staying ahead of the curve and delivering the
                  best possible experience for our users.
                </li>
              </ul>
            </div>
            <div>
              <h2>What We Offer</h2>
              <ul>
                <li>
                  Personalized Shopping: We believe in making your shopping
                  experience as unique as you are. By analyzing your search and
                  browsing history, we tailor your TNT experience to match your
                  interests perfectly. From trending items to personalized
                  recommendations, we've got you covered.
                </li>
                <li>
                  Trending Homepage: Our homepage is your gateway to the hottest
                  deals and trends in your area. Similar to TikTok's For You
                  page, we curate trending items based on factors like distance,
                  sales spikes, and discounts on wishlisted items, ensuring you
                  never miss out on what's hot.
                </li>
                <li>
                  Trade Your Way: TNT offers you the freedom to trade items at
                  your own discretion. Whether you're looking to exchange goods
                  or clear out items you no longer need, our trading feature
                  lets you do it all, giving you the power to get what you want.
                </li>
                <li>
                  Convenient Payment Options: We make shopping easy with cash on
                  delivery and shipping options for all sold items. Whether you
                  prefer to pay in person or have your items shipped to your
                  doorstep, TNT ensures a hassle-free experience every time.
                </li>
              </ul>
            </div>
            <div>
              <h2>Our Mission</h2>
              <p>
                At TNT, our mission is simple: to empower our users to shop,
                sell, and trade with confidence. We strive to provide a platform
                that not only offers explosive deals but also fosters a sense of
                community and connection among our users. Through personalized
                experiences and innovative features, we aim to make TNT the
                go-to destination for all your shopping needs.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer /> 
    </div>
  );
}
