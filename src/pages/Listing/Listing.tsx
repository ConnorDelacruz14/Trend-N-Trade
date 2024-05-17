import { useParams } from "react-router-dom";
import Header from "../../components/Header/Header.tsx";
import { IoCartOutline, IoChatboxEllipsesOutline, IoShieldCheckmarkOutline, IoStarHalfOutline, IoStarOutline, IoStar    } from "react-icons/io5";
import './listing.css'
import {useEffect} from "react";

interface Listing {
    id: number
    name: string
    tags: string[]
    description: string
    brand: string
    listingUserId: number
    images: string[]
    listingPrice: string
    cartStatus: number
    offerStatus: number
    numLikes: number
    postingDate: string
    otherParams?: never[]
}

const test_listing = {
    id: 1986735,
    name: "Disney Men's White T-shirt",
    tags: ["disney", "toystory", "movie"],
    description: "Toy Story pizza planet tee size large!",
    brand: "Disney",
    listingUserId: 12342,
    images: ["https://media-photos.depop.com/b1/43110874/1865488851_9a0a41a6a860499987d255dee637bb85/P0.jpg"],
    listingPrice: "35.00",
    cartStatus: 2,
    offerStatus: 4,
    postingDate: "11 hours ago",
    numLikes: 10,
}

const seller_profile = {
    id: 1986735,
    name: "jamielinn",
    rating: 3.5,
    pfp: "https://media-photos.depop.com/b0/17502360/777019148_c72db465b6aa4c8f861f4c56e4d055dd/U2.jpg"
}


const Listing = () => {
    const { listingId } = useParams<{ listingId: string }>();
    const listing: Listing = test_listing;
    const seller = seller_profile;

    useEffect(() => {
        fetch("http://localhost:8080/" + listingId)
            .then(res => res.json())
            .then(result => result)
    }, [listingId]);

    const generateStars = (rating: number) => {
        const fullStars = Math.floor(rating);
        const halfStar = rating % 1 !== 0;
        const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

        return (
            <>
                {Array(fullStars).fill(<IoStar key={Math.random()} color="#ff2300" />)}
                {halfStar && <IoStarHalfOutline key={Math.random()} color="#ff2300"/>}
                {Array(emptyStars).fill(<IoStarOutline key={Math.random()} color="#ff2300"/>)}
            </>
        );
    };

    return (
        <div className="listing-page-container">
            <Header />
            <div className="listing-page">
                    <div className="listing-container">
                        <div className="listing-images">
                            <img src={listing.images[0]} alt={listing.name} />
                        </div>
                        <div className="listing-info">
                            <div className="listing-main-info-container">
                                <div className="listing-cart">
                                    <span>
                                        <IoCartOutline color="#3d37bd"/>
                                        {listing.cartStatus ? `In ${listing.cartStatus} people's carts` : ""}
                                    </span>
                                    <span>
                                        <IoChatboxEllipsesOutline color="#3d37bd"/>
                                        {listing.offerStatus ? `${listing.offerStatus} offer(s) sent` : ""}
                                    </span>
                                </div>
                                <div className="listing-name">{listing.name}</div>
                                <div className="listing-price">${listing.listingPrice}</div>
                                <div className="listing-other">{listing.otherParams ? [0] : ""}</div>
                                <button className="listing-buy-now">Buy now</button>
                                <button className="listing-add-cart">Add to cart</button>
                                <button className="listing-extra">Trade</button>
                                <button className="listing-extra">Offer</button>
                                <button className="listing-extra">Save</button>
                            </div>
                            <div className="listing-buyer-protection">
                                <IoShieldCheckmarkOutline width={28} height={28} />
                                <div className="buyer-protection">
                                    All purchases through Trend 'n Trade are covered
                                    by Buyer Protection. <br></br>
                                    <a href="/about">Learn more</a>
                                </div>
                            </div>
                            <div className="listing-description-info">
                                <div className="listing-description">{listing.description}</div>
                                <div className="listing-tags">{listing.tags.map((tag) => {
                                    return "#" + tag + " "
                                })}</div>
                                <div className="listing-date">Listed {listing.postingDate}</div>
                            </div>
                            <div className="listing-profile-info">
                                <div className="profile-info">
                                    <img src={seller.pfp} alt={seller.name}/>
                                    <div className="listing-profile-info-text">
                                        <a className="listing-profile-name">{seller.name}</a>
                                        <div className="rating-stars">{generateStars(seller.rating)}</div>
                                    </div>
                                </div>
                                <div className="profile-buttons">
                                    <button>Visit profile</button>
                                    <button>Ask a question</button>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    );
};

export default Listing;