import { useState, ChangeEvent } from "react";
import "./editprofile.css";
import Header from "../../components/Header/Header.tsx";

interface SocialLinks {
  instagram: string;
  twitter: string;
  facebook: string;
}

const EditProfile = () => {
  const [name, setName] = useState<string>("Name");
  const [description, setDescription] = useState<string>("");
  const [major, setMajor] = useState<string>("Computer Science");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [socialLinks, setSocialLinks] = useState<SocialLinks>({
    instagram: "https://instagram.com",
    twitter: "https://twitter.com",
    facebook: "https://facebook.com"
  });

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleDescriptionChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(e.target.value);
  };

  const handleMajorChange = (e: ChangeEvent<HTMLInputElement>) => {
    setMajor(e.target.value);
  };

  const handleTagClick = (tag: string) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((t) => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  const handleSocialLinkChange = (platform: keyof SocialLinks, link: string) => {
    setSocialLinks({
      ...socialLinks,
      [platform]: link
    });
  };

  const handleSave = () => {
    // Implement save functionality here
    console.log("Saved changes:", { name, description, major, selectedTags, socialLinks });
  };

  return (
    <div className="edit-page-container">
      <Header />
      <div className="edit-page">
        <div className="profile-bar">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/256px-Default_pfp.svg.png"
            width="128"
            alt="Default pfp"
          />
          <input
            type="text"
            value={name}
            onChange={handleNameChange}
            className="name"
          />
          <span className="rating">
            <img src="/star.svg" alt="star" />
            <img src="/star.svg" alt="star" />
            <img src="/star.svg" alt="star" />
            <img src="/star.svg" alt="star" />
            <img src="/star.svg" alt="star" />
            <strong className="rating-number">5.0</strong>
          </span>
          <textarea
            id="description"
            name="description"
            value={description}
            onChange={handleDescriptionChange}
          ></textarea>
        </div>

        <div className="details">
          <p>
            <h2>Major</h2>
            <input
              type="text"
              value={major}
              onChange={handleMajorChange}
            />
          </p>
          <p>
            <h2>Tags</h2>
            <div className="tag-options">
              <button
                className={selectedTags.includes("Clothing") ? "tag-option selected" : "tag-option"}
                onClick={() => handleTagClick("Clothing")}
              >
                Clothing
              </button>
              <button
                className={selectedTags.includes("School") ? "tag-option selected" : "tag-option"}
                onClick={() => handleTagClick("School")}
              >
                School
              </button>
              <button
                className={selectedTags.includes("Vintage") ? "tag-option selected" : "tag-option"}
                onClick={() => handleTagClick("Vintage")}
              >
                Vintage
              </button>
              <button
                className={selectedTags.includes("Sportswear") ? "tag-option selected" : "tag-option"}
                onClick={() => handleTagClick("Sportswear")}
              >
                Sportswear
              </button>
              <button
                className={selectedTags.includes("Tech") ? "tag-option selected" : "tag-option"}
                onClick={() => handleTagClick("Tech")}
              >
                Tech
              </button>
            </div>
          </p>
          <p>
            <h2>Social Profiles</h2>
            <input
              type="text"
              value={socialLinks.instagram}
              onChange={(e: ChangeEvent<HTMLInputElement>) => handleSocialLinkChange("instagram", e.target.value)}
            />
            <input
              type="text"
              value={socialLinks.twitter}
              onChange={(e: ChangeEvent<HTMLInputElement>) => handleSocialLinkChange("twitter", e.target.value)}
            />
            <input
              type="text"
              value={socialLinks.facebook}
              onChange={(e: ChangeEvent<HTMLInputElement>) => handleSocialLinkChange("facebook", e.target.value)}
            />
          </p>

          <button className="save" onClick={handleSave}>Save</button>
        </div>
        
      </div>
     
    </div>
  );
};

export default EditProfile;