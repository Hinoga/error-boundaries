import React, { useState, useEffect } from "react";

const Sidebar = () => {
  const [dogImage, setDogImage] = useState("");

  useEffect(() => {
    handleNewDogImage();
  }, []);

  const handleNewDogImage = async () => {
    const newImage = await fetch("https://dog.ceo/api/breeds/image/random");
    const newImageJson = await newImage.json();
    setDogImage(newImageJson.message);
  };

  return (
    <div className="sidebar">
      <button onClick={handleNewDogImage}>
        Clicking here to get a new dog
      </button>
      <img src={dogImage} alt="" />
    </div>
  );
};

export default Sidebar;
