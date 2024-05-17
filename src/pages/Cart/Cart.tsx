import Header from "../../components/Header/Header";
import { FaRegTrashAlt } from "react-icons/fa";
import React, { useState } from "react";
import './cart.css';
import { IoCartOutline } from "react-icons/io5";

interface Listing {
    id: number;
    name: string;
    tags: string[];
    description: string;
    brand: string;
    listingUserId: number;
    images: string[];
    listingPrice: string;
    cartStatus: number;
    offerStatus: number;
    numLikes: number;
    postingDate: string;
    otherParams?: never[];
}

interface Profile {
    name: string;
    username: string;
    rating: number;
    id: number;
    pfp: string;
}

const profiles: { [key: number]: Profile } = {
    382125: {
        id: 382125,
        name: "Jamie Lin",
        username: 'jamielinn',
        rating: 3.5,
        pfp: "https://media-photos.depop.com/b0/17502360/777019148_c72db465b6aa4c8f861f4c56e4d055dd/U2.jpg"
    },
    485102: {
        id: 485102,
        name: "Houida Alnamous",
        username: 'houida',
        rating: 3.5,
        pfp: "https://media-photos.depop.com/b0/33751368/1175335553_86fd0ab12ddb4ea0802ddc2f2f5bc18b/U2.jpg"
    },
    395831: {
        id: 395831,
        name: "Nathan Rodriguez",
        username: 'thriftedblessing',
        rating: 4,
        pfp: "https://media-photos.depop.com/b1/37313951/1652112785_2531235a33bd472ea3c66cce2cb79c33/U1.jpg"
    },
    927891: {
        id: 927891,
        name: "Charles Quinn",
        username: 'decharcharpop',
        rating: 4,
        pfp: "https://media-photos.depop.com/b1/42568237/1733550558_0d0a8167ae0f44518ccbfc2dd0d82231/U2.jpg"
    },
};

const initialUserCart: Listing[] = [
    {
        id: 382125,
        name: "Disney Men's White T-shirt",
        tags: ["disney", "toystory", "movie"],
        description: "Toy Story pizza planet tee size large!",
        brand: "Disney",
        listingUserId: 382125,
        images: ["https://media-photos.depop.com/b1/43110874/1865488851_9a0a41a6a860499987d255dee637bb85/P0.jpg"],
        listingPrice: "35.00",
        cartStatus: 2,
        offerStatus: 4,
        postingDate: "11 hours ago",
        numLikes: 10,
    },
    {
        id: 485102,
        name: "NIKE Men's Air Max Ltd 3 Running sneakers",
        tags: ["nike", "sneakers", " airmax"],
        description: "Shoes",
        brand: "Nike",
        listingUserId: 485102,
        images: ["https://media-photos.depop.com/b1/33751368/1866407312_41e46c84aea5436b8564d50fdf928482/P2.jpg"],
        listingPrice: "65.00",
        cartStatus: 5,
        offerStatus: 4,
        postingDate: "14 hours ago",
        numLikes: 10,
    },
    {
        id: 123501,
        name: "Men's multi T-shirt",
        tags: ["white", "multi", "jurassicpark"],
        description: "Jurassic Park Tee",
        brand: "",
        listingUserId: 395831,
        images: ["https://media-photos.depop.com/b1/37313951/1866751203_d3e63361ea86463389e1c0ef0d116740/P0.jpg"],
        listingPrice: "5.00",
        cartStatus: 5,
        offerStatus: 4,
        postingDate: "12 hours ago",
        numLikes: 10,
    },
    {
        id: 102341,
        name: "Nike Men's Navy and Blue Hoodie",
        tags: ["navy", "blue", "streetwear"],
        description: "Vintage 90s dark navy blue Nike hoodie size large men’s y2k",
        brand: "Nike",
        listingUserId: 927891,
        images: ["https://media-photos.depop.com/b1/42568237/1867302550_0098c087a033479e829e7d9f7aae5523/P0.jpg"],
        listingPrice: "50.00",
        cartStatus: 5,
        offerStatus: 4,
        postingDate: "12 hours ago",
        numLikes: 10,
    }
];

const Cart = () => {
    const [userCart, setUserCart] = useState<Listing[]>(initialUserCart);

    const handleRemoveItem = (id: number) => {
        const updatedCart = userCart.filter(item => item.id !== id);
        setUserCart(updatedCart);
    };

    return (
        <div className="cart-page-container">
            <Header></Header>
            <div className="cart-page">
                Cart
                {userCart.map((cartItem: Listing, index) => (
                    <CartItem key={index} listing={cartItem} sellerProfileId={cartItem.listingUserId} onRemoveItem={handleRemoveItem}></CartItem>
                ))}
            </div>
        </div>
    );
};

interface CartItemProps {
    listing: Listing;
    sellerProfileId: number;
    onRemoveItem: (id: number) => void;
}

const CartItem: React.FC<CartItemProps> = ({ listing, sellerProfileId, onRemoveItem }) => {
    const sellerProfile = profiles[sellerProfileId];

    return (
        <div className="cart-item-container">
            <a href="/profile" className="cart-item-seller">
                <img src={sellerProfile.pfp} alt={sellerProfile.username} />
                <section>
                    <div className="cart-item-seller-name">{sellerProfile.name}</div>
                    <div className="cart-item-seller-username">@{sellerProfile.username}</div>
                </section>
            </a>
            <div className="cart-item">
                <section>
                    <a href={`/listing/${listing.id}`}><img src={listing.images[0]} alt={listing.name} /></a>
                    <div className="cart-item-info">
                        <span className="cart-item-status">
                            <IoCartOutline color="#3d37bd" />
                            {listing.cartStatus ? `In ${listing.cartStatus} people's carts` : ""}
                        </span>
                        <div className="cart-item-name">{listing.name}</div>
                        <div className="cart-item-price">${listing.listingPrice}</div>
                        <FaRegTrashAlt onClick={() => onRemoveItem(listing.id)} />
                    </div>
                </section>
                <div className="cart-item-payment-container">
                    <div className="cart-item-payment-info">
                        <div>Item(s)</div>
                        <div>US${listing.listingPrice}</div>
                    </div>
                    <div className="cart-item-payment-info">
                        <div>Estimated shipping</div>
                        <div>US${(parseFloat(listing.listingPrice) * 0.20).toFixed(2)}</div>
                    </div>
                    <div className="cart-item-payment-info payment-total">
                        <div>Total</div>
                        <div>US${(parseFloat(listing.listingPrice) * 1.20).toFixed(2)}</div>
                    </div>
                    <button>Checkout 1 Item</button>
                </div>
            </div>
        </div>
    );
};

export default Cart;
