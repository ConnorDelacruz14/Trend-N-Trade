import { useState, useEffect, ChangeEvent, useMemo } from "react";
import "./editprofile.css";
import Header from "../../components/Header/Header.tsx";
import { IoStar, IoStarHalfOutline, IoStarOutline } from "react-icons/io5";
import Footer from "../../components/Footer/Footer.tsx";
import Sidebar from "../../components/Sidebar/sidebar.tsx";
import { fetchData } from "../../api/index.ts";


interface SocialLinks {
  instagram: string;
  twitter: string;
  facebook: string;
}

const generateStars = (rating: number) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return (
    <>
      {Array.from({ length: fullStars }, (_, index) => <IoStar key={index} color="#ff2300" />)}
      {halfStar && <IoStarHalfOutline key={fullStars} color="#ff2300" />}
      {Array.from({ length: emptyStars }, (_, index) => <IoStarOutline key={fullStars + 1 + index} color="#ff2300" />)}
    </>
  );
};

const EditProfile = () => {
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [socialLinks, setSocialLinks] = useState<SocialLinks>({
    instagram: "",
    twitter: "",
    facebook: ""
  });
  const [rating, setRating] = useState<number>(0);
  const [profilePic, setProfilePic] = useState<string>("");

  const [successMessage, setSuccessMessage] = useState<string>("");

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const data = await fetchData('/api/user/getProfile', [], {}, 'GET');
        setName(data.username || "");
        setDescription(data.description || "");
        setSelectedTags(data.tags || []);
        setSocialLinks({
          instagram: data.instagram || "",
          twitter: data.twitter || "",
          facebook: data.facebook || ""
        });
        setRating(data.rating || 0);
        setProfilePic(data.pfp || "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/256px-Default_pfp.svg.png");
      } catch (error) {
        console.error('Error fetching profile data:', error);
      }
    };

    fetchProfileData();
  }, []);

  const stars = useMemo(() => generateStars(rating), [rating]);

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleDescriptionChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(e.target.value);
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

  const handleSave = async () => {
    const updatedProfile = {
      username: name,
      description,
      tags: selectedTags,
      instagram: socialLinks.instagram,
      twitter: socialLinks.twitter,
      facebook: socialLinks.facebook
    };

    try {
      const response = await fetchData('/api/user/updateUser', [], updatedProfile, 'PUT');
      console.log("Profile updated successfully:", response);
      setSuccessMessage("Profile updated successfully");
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };

  return (
    <>
      <Header />
      <div className="Container">
        <Sidebar />
        <section className="sect2">
          <div className="edit-page">
            <div className="profile-bar">
              <img
                src={profilePic}
                width="128"
                alt="Profile pic"
              />
              <input
                type="text"
                value={name}
                onChange={handleNameChange}
                className="name"
                placeholder="Name"
              />
              <span className="rating">
                <div className="rating-stars">{stars}</div>
                <strong className="rating-number">{rating}</strong>
              </span>
              <textarea
                id="description"
                name="description"
                value={description}
                onChange={handleDescriptionChange}
                placeholder="Description"
              ></textarea>
            </div>

            <div className="details">
              <p>
                <h2>Tags</h2>
                <div className="tag-options">
                  <button
                    className={selectedTags.includes("clothing") ? "tag-option selected" : "tag-option"}
                    onClick={() => handleTagClick("clothing")}
                  >
                    Clothing
                  </button>
                  <button
                    className={selectedTags.includes("school") ? "tag-option selected" : "tag-option"}
                    onClick={() => handleTagClick("school")}
                  >
                    School
                  </button>
                  <button
                    className={selectedTags.includes("vintage") ? "tag-option selected" : "tag-option"}
                    onClick={() => handleTagClick("vintage")}
                  >
                    Vintage
                  </button>
                  <button
                    className={selectedTags.includes("sportswear") ? "tag-option selected" : "tag-option"}
                    onClick={() => handleTagClick("sportswear")}
                  >
                    Sportswear
                  </button>
                  <button
                    className={selectedTags.includes("tech") ? "tag-option selected" : "tag-option"}
                    onClick={() => handleTagClick("tech")}
                  >
                    Tech
                  </button>
                </div>
              </p>
              <p>
                <h2>Social Profiles</h2>
                <label htmlFor="instagram">Instagram</label>
                <input
                  type="text"
                  id="instagram"
                  value={socialLinks.instagram}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => handleSocialLinkChange("instagram", e.target.value)}
                />
                <label htmlFor="twitter">Twitter</label>
                <input
                  type="text"
                  id="twitter"
                  value={socialLinks.twitter}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => handleSocialLinkChange("twitter", e.target.value)}
                />
                <label htmlFor="facebook">Facebook</label>
                <input
                  type="text"
                  id="facebook"
                  value={socialLinks.facebook}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => handleSocialLinkChange("facebook", e.target.value)}
                />
              </p>

              <button className="save" onClick={handleSave}>Save</button>
              {successMessage && <p>{successMessage}</p>}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default EditProfile;