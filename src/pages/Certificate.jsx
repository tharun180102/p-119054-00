
import React, { useState } from "react";
import "./styles/certificate-layout.css";
import "./styles/upload-section.css";
import "./styles/description-section.css";
import "./styles/certificates-grid.css";

const Certificate = () => {
  const [imageUrl, setImageUrl] = useState("");
  const [description, setDescription] = useState("");
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const certificates = [
    { id: 1, image: "public/lovable-uploads/a785049a-f1e7-4cec-8329-66328a3a9bd7.png" },
    // Additional certificates would be added here
  ];

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageUrl(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleImagePaste = (event) => {
    setImageUrl(event.target.value);
  };

  return (
    <div className="certificate-container">
      <div className="certificate-content">
        <h1 className="page-title">Approver Digital Sign</h1>
        
        <div className="certificate-card">
          <div className="details-section">
            <div className="upload-section">
              <div className="upload-area">
                <input
                  type="file"
                  id="imageUpload"
                  accept="image/jpeg,image/png"
                  onChange={handleImageUpload}
                  className="file-input"
                />
                <label htmlFor="imageUpload" className="upload-label">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/d3003d8460d84960a9fec969158b8a9c/10f6c063435c5e2a12e278d45ed3d4b0d5cc030134981291d796e43f7b89912e"
                    alt="Upload"
                    className="upload-icon"
                  />
                  <span>Upload your image (Use JPEG or PNG images, <2MB)</span>
                </label>
              </div>

              <div className="paste-area">
                <input
                  type="text"
                  placeholder="Paste your image url here (JPEG or PNG images, <2MB)"
                  value={imageUrl}
                  onChange={handleImagePaste}
                  className="paste-input"
                />
              </div>
            </div>

            <div className="description-section">
              <h2 className="section-title">Certificate Description (200 characters)</h2>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                maxLength={200}
                className="description-input"
                placeholder="Enter certificate description..."
              />
            </div>
          </div>

          <div className="certificates-grid">
            {certificates.map((cert) => (
              <div 
                key={cert.id} 
                className={`certificate-preview ${selectedCertificate === cert.id ? 'selected' : ''}`}
                onClick={() => setSelectedCertificate(cert.id)}
              >
                <img src={cert.image} alt="Certificate template" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certificate;
