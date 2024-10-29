// src/App.js
// src/App.js
// src/App.js
import React, { useState } from "react";
import CurationCanvas from "./CurationCanvas";
import { uploadImage } from "./uploadService";
import html2canvas from "html2canvas"; // Import html2canvas

function App() {
  const [images, setImages] = useState([]);

  const handleImageUpload = async (event) => {
    const file = event.target.files[0];
    const imageUrl = await uploadImage(file);
    setImages([...images, imageUrl]);
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
      <CurationCanvas images={images} />
      <button onClick={handleExport}>Export Curated Look</button>
    </div>
  );
}

export default App;
