import React from "react";
import "../styles/components/Loading.scss"; // You can adjust the path based on your project structure

export const Loading: React.FC = () => {
  return (
    <div className="loading-container">
      <div className="spinner"></div>
      <p>Loading some destinations...</p>
    </div>
  );
};
