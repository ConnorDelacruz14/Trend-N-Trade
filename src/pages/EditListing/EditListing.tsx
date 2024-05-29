import React, { useState } from 'react';
import { BiImageAdd } from "react-icons/bi";
import './editlisting.css';
import Header from "../../components/Header/Header.tsx";
import Footer from "../../components/Footer/Footer.tsx";

const EditListing: React.FC = () => {
    const colorOptions = ['None', 'Red', 'Blue', 'Green', 'Yellow', 'Black', 'White', 'Purple', 'Orange', 'Pink', 'Brown'];
    const [selectedColor, setSelectedColor] = useState<string>('None');
    const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);

    const handleColorSelect = (color: string) => {
        setSelectedColor(color);
        setDropdownOpen(false);
    };

    return (
        <div className="edit-listing-page-container">
            <Header/>
            <div className="edit-listing-page">
                <div className="edit-listing-container">
                    <h2>List an item</h2>
                    <section className="edit-photos">
                        <h3>Photos</h3>
                        <p>Add up to 8 photos in JPEG or PNG format</p>
                        <div className="listing-photos-container">
                            {[...Array(8)].map((_, index) => (
                                <div key={index} className="listing-blank-image">
                                    <label htmlFor={`image-upload-${index}`}>
                                        <BiImageAdd size={30}/>
                                        <p>Add a photo</p>
                                    </label>
                                    <input type="file" id={`image-upload-${index}`} />
                                </div>
                            ))}
                        </div>
                    </section>
                    <section className="edit-description">
                        <h3>Description</h3>
                        <textarea cols={90} rows={5}></textarea>
                    </section>
                    <section className="edit-dropdowns">
                        <h3>Info</h3>
                        <p>Brand</p>
                        <input type="text" value="Other"/>
                        <p>Condition</p>
                        <select id="edit-condition">
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
                            <ListingTag name="nike"/>
                        </div>
                    </section>
                    <section className="edit-enhance">
                        <h3>Enhance your listing</h3>
                        <p>Colors</p>
                        <div className="custom-dropdown">
                            <div className="custom-dropdown-selected" onClick={() => setDropdownOpen(!dropdownOpen)}>
                                <div className="color-circle" style={{ backgroundColor: selectedColor.toLowerCase() === 'none' ? 'transparent' : selectedColor.toLowerCase(), border: selectedColor.toLowerCase() === 'none' ? '1px solid black' : 'none' }}></div>
                                <span>{selectedColor}</span>
                            </div>
                            {dropdownOpen && (
                                <div className="custom-dropdown-list">
                                    {colorOptions.map(color => (
                                        <div key={color} className="custom-dropdown-option" onClick={() => handleColorSelect(color)}>
                                            <div className="color-circle" style={{ backgroundColor: color.toLowerCase() === 'none' ? 'transparent' : color.toLowerCase(), border: color.toLowerCase() === 'none' ? '1px solid black' : 'none' }}></div>
                                            <span>{color}</span>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                        <p>Location</p>
                        <input type="text"/>
                    </section>
                    <section className="edit-shipping">
                        <h3>Shipping</h3>
                    </section>
                    <section className="edit-price">
                        <h3>Price</h3>
                        <input type="text"/>
                    </section>
                </div>
            </div>
            <Footer/>
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
