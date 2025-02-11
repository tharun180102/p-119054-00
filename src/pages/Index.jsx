
import React, { useState } from "react";
import "./Index.css";

const Index = () => {
  const [badges, setBadges] = useState([
    { id: "1", title: "Newbie", pointsRange: "0-100" },
    { id: "2", title: "Explorer", pointsRange: "0-100" },
    { id: "3", title: "Challenger", pointsRange: "0-100" },
    { id: "4", title: "Achiever", pointsRange: "0-100" },
    { id: "5", title: "Strategist", pointsRange: "0-100" },
    { id: "6", title: "Newbie", pointsRange: "0-100" },
  ]);
  const [selectedBadge, setSelectedBadge] = useState("1");

  const handleAddNew = () => {
    const newBadge = {
      id: `badge-${Date.now()}`,
      title: "New Badge",
      pointsRange: "0-100",
    };
    setBadges([...badges, newBadge]);
  };

  const handleEdit = (id) => {
    setSelectedBadge(id);
  };

  const handleDelete = (id) => {
    setBadges(badges.filter((badge) => badge.id !== id));
  };

  return (
    <div className="badge-container">
      <div className="badge-content">
        <h1 className="page-title">Badge Management System</h1>
        
        <div className="badge-card">
          {/* Header Section */}
          <div className="badge-header">
            <div className="header-title">
              Badges and Points range
            </div>
            <button
              onClick={handleAddNew}
              className="add-button"
            >
              + Add New Badge
            </button>
          </div>

          {/* Table Headers */}
          <div className="table-headers">
            <div className="header-title">Title</div>
            <div className="header-points">Points range</div>
            <div className="header-badge">Badge</div>
            <div className="header-actions">Actions</div>
          </div>

          {/* Badge Rows */}
          {badges.map((badge) => (
            <div
              key={badge.id}
              className="badge-row"
            >
              <div className="badge-info">
                <div className="badge-field">
                  <div
                    className={`badge-input ${
                      badge.id === selectedBadge ? "selected" : ""
                    }`}
                  >
                    {badge.title}
                  </div>
                </div>
                <div className="badge-field">
                  <div className="badge-input">
                    {badge.pointsRange}
                  </div>
                </div>
              </div>
              <div className="badge-actions">
                <div className="badge-upload">
                  {badge.badgeImage ? (
                    <img
                      src={badge.badgeImage}
                      alt="Badge"
                      className="badge-image"
                    />
                  ) : (
                    <div className="badge-placeholder" />
                  )}
                  <div className="upload-text">Upload custom badge</div>
                </div>
                <div className="action-buttons">
                  <button
                    onClick={() => handleEdit(badge.id)}
                    className="edit-button"
                  >
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/d3003d8460d84960a9fec969158b8a9c/10f6c063435c5e2a12e278d45ed3d4b0d5cc030134981291d796e43f7b89912e"
                      className="button-icon"
                      alt="Edit"
                    />
                  </button>
                  <button
                    onClick={() => handleDelete(badge.id)}
                    className="delete-button"
                  >
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/d3003d8460d84960a9fec969158b8a9c/8b536eeb3070a365486db295aa63517a9a54848455a785299f1e22335cb8fe01"
                      className="button-icon"
                      alt="Delete"
                    />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
