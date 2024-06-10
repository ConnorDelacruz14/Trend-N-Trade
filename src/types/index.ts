export default interface Listing {
    _id: string;
    name: string;
    tags: string[];
    images: string[];
    description: string;
    brand: string;
    listingUserId: string;
    listingPrice: string;
    cartStatus: string[];
    offerStatus: string[];
    postingDate: Date;
    condition: string;
    numLikes: number;
    purchaseStatus: string;
}