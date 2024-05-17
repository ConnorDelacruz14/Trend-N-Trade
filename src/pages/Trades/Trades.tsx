
import Footer from "../../components/Footer/Footer.tsx";
import Header from "../../components/Header/Header.tsx";
import Sidebar from "../../components/Sidebar/sidebar.tsx";
import './trades.css';

interface Trade {
    yourImage: string;
    yourName: string;
    theirItem: string;
    theirName: string;
    tradeStatus:string
}

const test_trades: Trade[] = [
    {
        yourImage: "https://media-photos.depop.com/b1/44652577/1852358784_1d1b614b6af34bbab81f515704dd0dbe/P0.jpg",
        yourName: "Vintage Y2K Swim Shorts",
        theirItem: "https://media-photos.depop.com/b1/47703373/1864773281_93cb72e5f9614c7fac68600a7b7af2b6/P0.jpg",
        theirName: "Nike Vintage Hoodie",
        tradeStatus: "Awaiting Response"

    },
    {
        yourImage: "https://media-photos.depop.com/b1/48270173/1842450567_5a4bb8a61c994a12b5a2c78a8edf1c75/P0.jpg",
        yourName: "Y2K Grunge Black Baggy Embroidered Jeans",
        theirItem: "https://media-photos.depop.com/b1/33561531/1842324710_c14835f599e24b23aa2c5f3d4fc1e701/P0.jpg",
        theirName: "Vintage mma elite shirt brown size 2xl baggy goth grunge cyber skulls wings sword",
        tradeStatus: "Rejected"

    }


];

const Offers = () => {

    return(
        <>
            <Header />
            <div className="Container">
                <Sidebar />
                <section className="sect2">
                    <div className="transactions-container">
                        <h3 className="sidebar-title">My Trades</h3>
                        <div className="transactions-table">
                            <table>
                                <thead>
                                <tr>
                                    <th>Your Item</th>
                                    <th></th>
                                    <th>Status</th>
                                    <th></th>
                                    <th>Their Item</th>
                                    <th></th>
                                    <th></th>
                                </tr>
                                </thead>
                                <tbody>
                                {test_trades.map((trade , index) => (
                                    <tr key={index}>
                                        <td className="product-image"><img src={trade.yourImage} alt="Product Image"/>
                                        </td>

                                        <td className="product-name">{trade.yourName}</td>
                                        <td className="product-name">{trade.tradeStatus}</td>
                                        <td></td>
                                        <td className="product-image"><img src={trade.theirItem} alt="Product Image"/>
                                        </td>

                                        <td className="product-name">{trade.theirName}</td>

                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </>
    )

};

export default Offers;