// src/CurationCanvas.js
// src/CurationCanvas.js
import React from "react";

const CurationCanvas = ({ images }) => {
  return (
    <div id="curation-canvas">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Uploaded ${index}`}
          style={{ width: "200px", height: "auto", margin: "10px" }}
        />
      ))}
    </div>
  );
};

export default CurationCanvas;
