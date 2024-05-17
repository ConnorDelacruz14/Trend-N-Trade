import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

import './saveditems.css';

export default function Home() {
    return (
        <div>
            <>
                <Header />
                <main>
                    <section className="desc">
                    </section>
                    <section className="listing">
                        <h4>Saved Items</h4>
                        <ul>
                            <li>
                                <img src="https://media-photos.depop.com/b1/37600508/1859738099_b154163e5fc44390b894487c287d0602/P0.jpg" alt="" />
                                Vintage Y2K Nike Hoodie XL <br /> $29.99{" "}
                            </li>
                            <li>
                                <img src="https://media-photos.depop.com/b1/37300341/1858450038_3502ebd123a4487eb92ed3a8b7d19c92/P0.jpg" alt="" />
                                Juicy Couture Bag <br /> $14.99
                            </li>
                            <li>
                                <img src="https://media-photos.depop.com/b1/21350632/1868355768_675f37477a7c4bae93959b6402775f93/P0.jpg" alt="" />
                                Green Lantern T-Shirt <br /> $5.99
                            </li>
                            <li>
                                <img src="https://media-photos.depop.com/b1/38847964/1839215102_a180deef92c24569b2a8c97b71695e37/P0.jpg" alt="" />
                                Jeans 40x30 <br /> $24.99
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <img src="https://media-photos.depop.com/b1/47822347/1867865396_9fcf762c0dca4d96b5abe61e835b9973/P0.jpg" alt="" />
                                Necklace (Guy Included) <br /> $17.99
                            </li>
                            <li>
                                <img src="https://media-photos.depop.com/b1/3776716/1866762134_f119bbdb731641d8aa735689a481bf3d/P0.jpg" alt="" />
                                Arc'teryx Grey Beanie
                                <br /> $35.00
                            </li>
                            <li>
                                <img src="https://media-photos.depop.com/b1/48510653/1867468356_b16b87094bc0473395c142f6cd5e247b/P0.jpg" alt="" />
                                Crocs Size 13 <br /> $29.99
                            </li>
                            <li>
                                <img src="https://media-photos.depop.com/b1/43502777/1860590773_a6f1fd5b9e6145d9a60f5730de405e70/P0.jpg" alt="" />
                                Green Loafers <br /> $20.00
                            </li>
                        </ul>
                    </section>
                </main>
            </>
            <Footer />
        </div>
    );
}
