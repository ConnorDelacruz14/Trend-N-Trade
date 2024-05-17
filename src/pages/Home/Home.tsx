import { useState, useEffect, useRef } from 'react';
import Header from "../../components/Header/Header.tsx";
import './home.css';

const categoryImages = [
    "https://images.ctfassets.net/itoh30v6uh9a/5LhpEpqHAlX4AkIghUYuGU/3f1901f5e16cc75d2c2fe2b0ef4d2954/Frame_4__1_.jpg",
    "https://www.designscene.net/wp-content/uploads/2024/02/Japanese-Stationery-00.jpg",
    "https://cdn.thewirecutter.com/wp-content/media/2023/06/laptops-2048px-5607.jpg?auto=webp&quality=75&crop=1.91:1&width=1200",
    "https://media.cnn.com/api/v1/images/stellar/prod/comfy-shoes-nike-new-lead.jpg?c=16x9&q=w_800,c_fill"
];

const Home = () => {
    const [currentImage, setCurrentImage] = useState(0);
    const [animateDirection, setAnimateDirection] = useState('sliding-enter-active');
    const autoScrollRef = useRef<number>();

    const handleNext = () => {
        setAnimateDirection('sliding-enter-active');
        setCurrentImage(prev => (prev + 1) % categoryImages.length);
    };

    useEffect(() => {
        autoScrollRef.current = setInterval(() => {
            handleNext();
        }, 5000);

        return () => clearInterval(autoScrollRef.current);
    }, []);

    // To trigger the animation correctly on initial mount and subsequent updates
    useEffect(() => {
        const currentTimeout = setTimeout(() => {
            setAnimateDirection('sliding-exit-active');
        }, 4400); // slightly less than interval to maintain consistency
        return () => clearTimeout(currentTimeout);
    }, [currentImage]);

    return (
        <div className="home-page-container">
            <Header />
            <div className="home-page">
                <div className="home-banner">
                    <img
                        className={animateDirection}
                        src={categoryImages[currentImage]}
                        alt={`Category ${currentImage + 1}`}
                    />
                    <div className="home-banner-text">
                        <h2>Set Trends, Bargain Brilliance.</h2>
                    </div>
                    <div className="banner-buttons">
                        <a href="/search"><button className="shop-now">Shop now</button></a>
                        
                        <button className="sell-now">Sell now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;