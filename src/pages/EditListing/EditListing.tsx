import React from 'react';
import { BiImageAdd } from "react-icons/bi";
import './editlisting.css'
import Header from "../../components/Header/Header.tsx";

const EditListing:React.FC = () => {
    return (
        <div className="edit-listing-page-container">
            <Header/>
            <div className="edit-listing-page">
                <div className="edit-listing-container">
                    <h2>List an item</h2>
                    <div className="edit-photos">
                        <h3>Photos</h3>
                        <p>Add up to 8 photos in JPEG or PNG format</p>
                        <div className="listing-photos-container">
                            <div className="listing-blank-image">
                                <label htmlFor="cover-image-upload">
                                    <BiImageAdd size={30}/>
                                    <p>Add a photo</p>
                                </label>
                                <input type="file" id="cover-image-upload"/>
                            </div>
                            <div className="listing-blank-image">
                                <label htmlFor="cover-image-upload">
                                    <BiImageAdd size={30}/>
                                    <p>Add a photo</p>
                                </label>
                                <input type="file" id="cover-image-upload"/>
                            </div>
                            <div className="listing-blank-image">
                                <label htmlFor="cover-image-upload">
                                    <BiImageAdd size={30}/>
                                    <p>Add a photo</p>
                                </label>
                                <input type="file" id="cover-image-upload"/>
                            </div>
                            <div className="listing-blank-image">
                                <label htmlFor="cover-image-upload">
                                    <BiImageAdd size={30}/>
                                    <p>Add a photo</p>
                                </label>
                                <input type="file" id="cover-image-upload"/>
                            </div>
                            <div className="listing-blank-image">
                                <label htmlFor="cover-image-upload">
                                    <BiImageAdd size={30}/>
                                    <p>Add a photo</p>
                                </label>
                                <input type="file" id="cover-image-upload"/>
                            </div>
                            <div className="listing-blank-image">
                                <label htmlFor="cover-image-upload">
                                    <BiImageAdd size={30}/>
                                    <p>Add a photo</p>
                                </label>
                                <input type="file" id="cover-image-upload"/>
                            </div>
                            <div className="listing-blank-image">
                                <label htmlFor="cover-image-upload">
                                    <BiImageAdd size={30}/>
                                    <p>Add a photo</p>
                                </label>
                                <input type="file" id="cover-image-upload"/>
                            </div>
                            <div className="listing-blank-image">
                                <label htmlFor="cover-image-upload">
                                    <BiImageAdd size={30}/>
                                    <p>Add a photo</p>
                                </label>
                                <input type="file" id="cover-image-upload"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default EditListing;