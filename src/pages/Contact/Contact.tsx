import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import './Contact.css';

export default function Contact() {
  return (
    <div>
    <Header/>
    <main>
      <section className="Contact">
        <h2>Contact us</h2>
        <form>
          <label htmlFor="email">
            Your email address <b style={{ color: "red" }}>*</b>
          </label>
          <input type="email" name="email" id="email" required />

          <label htmlFor="subject">
            Subject <b style={{ color: "red" }}>*</b>
          </label>
          <input type="text" name="subject" id="subject" required />

          <label htmlFor="description">
            Description <b style={{ color: "red" }}>*</b>
          </label>
          <textarea
            name="description"
            id="description"
            cols={30}
            rows={10}
            required
          />

          <label htmlFor="order">
            Order Number <b style={{ color: "red" }}>*</b>
          </label>
          <input type="number" name="order" id="order" required />

          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </section>
    </main>
    <Footer/>
    </div>
  );
}
