// src/App.js
// src/App.js
// src/App.js
// src/App.js
import React, { useState } from "react";
import CurationCanvas from "./CurationCanvas";
import { uploadImage } from "./uploadService";
import html2canvas from "html2canvas"; // Import html2canvas
import UserComponent from './UserComponent'; // Ensure this is correct

function App() {
  const [images, setImages] = useState([]);
  const [error, setError] = useState(null); // State for error handling

  const handleImageUpload = async (event) => {
    const file = event.target.files[0];

    // Validate file type
    if (!file) {
      setError("Please select a file.");
      return;
    }

    // Check if the file is an image
    if (!file.type.startsWith("image/")) {
      setError("Please upload a valid image file.");
      return;
    }

    setError(null); // Clear any previous errors

    try {
      const imageUrl = await uploadImage(file);
      console.log("Uploaded image URL:", imageUrl); // Log the uploaded image URL
      setImages((prevImages) => [...prevImages, imageUrl]); // Update images state
    } catch (uploadError) {
      setError("Failed to upload image. Please try again.");
      console.error("Image upload error: ", uploadError);
    }
  };

  const handleExport = () => {
    html2canvas(document.querySelector("#curation-canvas")).then((canvas) => {
      const link = document.createElement("a");
      link.download = "curated-look.png";
      link.href = canvas.toDataURL();
      link.click();
    });
  };

  return (
    <div>
      <h1>Viora AI Styling Tool</h1>
      <input type="file" onChange={handleImageUpload} />
      {error && <p style={{ color: "red" }}>{error}</p>} {/* Display error message */}
      <CurationCanvas images={images} />
      <button onClick={handleExport}>Export Curated Look</button>

      {/* Add UserComponent here */}
      <UserComponent />  {/* This will render the user management features */}
    </div>
  );
}

export default App;
