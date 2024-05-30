import React, { useState } from 'react';
import { BiImageAdd } from "react-icons/bi";
import './editlisting.css';
import Header from "../../components/Header/Header.tsx";
import Footer from "../../components/Footer/Footer.tsx";
import Listing from "../../types/index.ts"

const defaultListing: Listing = {
    _id: "",
    name: "",
    tags: [],
    images: ['', '', '', '', '', '', '', ''],
    description: "",
    brand: "",
    listingUserId: "",
    listingPrice: "",
    cartStatus: [],
    offerStatus: [],
    postingDate: new Date(),
    condition: "",
    numLikes: 0
}

const EditListing: React.FC = () => {
    const colorOptions = ['None', 'Red', 'Blue', 'Green', 'Yellow', 'Black', 'White', 'Purple', 'Orange', 'Pink', 'Brown'];
    const [selectedColor, setSelectedColor] = useState<string>('None');
    const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
    const [listing, setListing] = useState<Listing>(defaultListing);

    const handleColorSelect = (color: string) => {
        setSelectedColor(color);
        setDropdownOpen(false);
    };

    const handleImageUpload = (index: number, event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const newUploadedImages = [...listing.images];
            newUploadedImages[index] = URL.createObjectURL(file);
            setListing({...listing, images: newUploadedImages});
        }
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(listing);
    };

    return (
        <div className="edit-listing-page-container">
            <Header />
            <div className="edit-listing-page">
                <form className="edit-listing-container" onSubmit={handleSubmit}>
                    <h2>List an item</h2>
                    <section>
                        <h3>Name</h3>
                        <input type="text" onChange={(e) => setListing({ ...listing, name: e.target.value })} />
                    </section>
                    <section className="edit-photos">
                        <h3>Photos</h3>
                        <p>Add up to 8 photos in JPEG or PNG format</p>
                        <div className="listing-photos-container">
                            {listing.images.map((image, index) => (
                                <div key={index} className="listing-blank-image">
                                    {image ? (
                                        <img src={image} alt={`Uploaded ${index}`} className="listing-uploaded-image" />
                                    ) : (
                                        index === 0 || listing.images[index - 1] ? (
                                            <label htmlFor={`image-upload-${index}`}>
                                                <BiImageAdd size={30} />
                                                <p>Add a photo</p>
                                            </label>
                                        ) : null
                                    )}
                                    <input
                                        type="file"
                                        id={`image-upload-${index}`}
                                        style={{ display: 'none' }}
                                        onChange={(e) => handleImageUpload(index, e)}
                                    />
                                </div>
                            ))}
                        </div>
                    </section>
                    <section className="edit-description">
                        <h3>Description</h3>
                        <textarea cols={90} rows={5} onChange={(e) => {setListing({...listing, description: e.target.value})}}></textarea>
                    </section>
                    <section className="edit-dropdowns">
                        <h3>Info</h3>
                        <p>Brand</p>
                        <input type="text" defaultValue="Other" onChange={(e) => {setListing({...listing, brand: e.target.value})}} />
                        <p>Condition</p>
                        <select id="edit-condition" onChange={(e) => {setListing({...listing, condition: e.target.value})}}>
                            <option value="brand-new">Brand new - Unused with original packaging or tags</option>
                            <option value="like-new">Like new - Mint condition pre-owned or new without tags</option>
                            <option value="lightly-used">Used - Lightly used but no noticeable flaws</option>
                            <option value="minor-flaws">Used - Minor flaws or signs of wear, noted in description or photos</option>
                            <option value="obvious-flaws">Used - Obvious flaws or signs of wear, noted in description or photos</option>
                        </select>
                    </section>
                    <section className="edit-tags">
                        <h3>Tags</h3>
                        <div className="edit-tags-container">
                            <ListingTag name="nike" />
                        </div>
                    </section>
                    <section className="edit-enhance">
                        <h3>Enhance your listing</h3>
                        <p>Colors</p>
                        <div className="custom-dropdown">
                            <div className="custom-dropdown-selected" onClick={() => setDropdownOpen(!dropdownOpen)}>
                                <div className="color-circle" style={{
                                    backgroundColor: selectedColor.toLowerCase() === 'none' ? 'transparent' : selectedColor.toLowerCase(),
                                    border: selectedColor.toLowerCase() === 'none' ? '1px solid black' : 'none'
                                }}></div>
                                <span>{selectedColor}</span>
                            </div>
                            {dropdownOpen && (
                                <div className="custom-dropdown-list">
                                    {colorOptions.map(color => (
                                        <div key={color} className="custom-dropdown-option" onClick={() => handleColorSelect(color)}>
                                            <div className="color-circle" style={{
                                                backgroundColor: color.toLowerCase() === 'none' ? 'transparent' : color.toLowerCase(),
                                                border: color.toLowerCase() === 'none' ? '1px solid black' : 'none'
                                            }}></div>
                                            <span>{color}</span>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                        <p>Location</p>
                        <input type="text" />
                    </section>
                    <section className="edit-shipping">
                        <h3>Shipping</h3>
                    </section>
                    <section className="edit-price">
                        <h3>Price</h3>
                        <input type="text" onChange={(e) => setListing({...listing, listingPrice: e.target.value})} />
                    </section>
                    <button className="listing-submit-button" type="submit">Create Listing</button>
                </form>
            </div>
            <Footer />
        </div>
    );
};

interface ListingTagProps {
    name: string;
}

const ListingTag: React.FC<ListingTagProps> = ({ name }) => {
    return (
        <div className="listing-tag">
            <div>{name}</div>
            <div className="tag-x">x</div>
        </div>
    );
};

export default EditListing;
