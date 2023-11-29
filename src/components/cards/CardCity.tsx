import React from "react";
import "../../styles/components/CardCity.css"; // Update the import path

interface City {
  id: number;
  country: string;
  city: string;
  image: string;
  intro: string;
  url: string;
}

const CardCity: React.FC<{ city: City }> = ({ city }) => {
  return (
    <section className="card-city">
      <img src={city.image} alt={city.city} />
      <div className="card-overlay">
        <h3 className="card-title">{city.country}</h3>
        <h3 className="card-subtitle">{city.city}</h3>
        <div className="card-intro">{city.intro}</div>
        <a href={city.url} className="learn-more-btn">
          Learn more
        </a>
      </div>
    </section>
  );
};

export default CardCity;
