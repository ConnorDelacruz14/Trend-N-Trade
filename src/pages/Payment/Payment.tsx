import React, { useState, useEffect } from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Sidebar from '../../components/Sidebar/sidebar';
import "./Payment.css";
import { fetchData } from '../../api';

interface Card {
  cardholderName: string;
  cardNumber: string;
  expirationDate: string;
  cvc: string;
}

const Payment: React.FC = () => {

  const [cards, setCards] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState<Card>({
    cardholderName: '',
    cardNumber: '',
    expirationDate: '',
    cvc: ''
  });

  const fetchCardInfo = async () => {
    try {
      const response = await fetchData('/api/user/getCards', [], null, 'GET');
      console.log(response);
      if (response && response.cards) {
        setCards(response.cards); // Assuming response.cards is in the format of Card[]
        console.log(cards);
      } else {
        console.error('Failed to fetch card information:', response);
      }
    } catch (error) {
      console.error('Error fetching card information:', error);
    }
  };

  useEffect(() => {

    fetchCardInfo();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleAddCard = async () => {
    try {
      const response = await fetchData('/api/user/updateCard', [], formData, 'PUT');
      if (response.message === 'Credit card information updated successfully') {
        setFormData({
          cardholderName: '',
          cardNumber: '',
          expirationDate: '',
          cvc: ''
        });
        setShowForm(false);
        fetchCardInfo()
      } else {
        console.error('Failed to update credit card information:', response);
      }
    } catch (error) {
      console.error('Error updating credit card information:', error);
    }
  };

  const handleRemoveCard = async (index: number) => {
    try {
      const response = await fetchData('/api/user/removeCards', [], { cardIndex: index }, 'PUT');
      if (response.message === 'Card information removed successfully') {
        setCards(cards.filter((_, idx) => idx !== index));
      } else {
        console.error('Failed to remove card information:', response);
      }
    } catch (error) {
      console.error('Error removing card information:', error);
    }
  };

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
              <button onClick={() => setShowForm(!showForm)}>
                <b>{showForm ? 'Cancel' : 'Add Credit/Debit Card'}</b>
              </button>
            </div>
            {showForm && (
              <div className="card-form">
                <h3>Add Card</h3>
                <input
                  type="text"
                  name="cardholderName"
                  placeholder="Cardholder Name"
                  value={formData.cardholderName}
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  name="cardNumber"
                  placeholder="Card Number"
                  value={formData.cardNumber}
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  name="expirationDate"
                  placeholder="Expiration Date (MM/YY)"
                  value={formData.expirationDate}
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  name="cvc"
                  placeholder="CVC"
                  value={formData.cvc}
                  onChange={handleInputChange}
                />
                <button onClick={handleAddCard}>Add Card</button>
              </div>
            )}
            <div className="stored-card">
              <h3>Stored Cards</h3>
              {cards && cards.length > 0 ? (
                cards.map((card, index) => (
                  <div key={index} className="card-item">
                    <p>{card[0]} - {card[1]} - {card[2]} - {card[3]}</p>
                    <button onClick={() => handleRemoveCard(index)}>Remove Card</button>
                  </div>
                ))
              ) : (
                <p>No stored cards found.</p>
              )}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Payment;
