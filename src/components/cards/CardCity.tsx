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
        <section className="card-section-visible">
          <h3 className="card-title">{city.country}</h3>
          <h2 className="card-subtitle">{city.city}</h2>
        </section>
        <section className="card-section-hidden">
          <p className="card-intro">{city.intro}</p>
          <a
            href={city.url}
            aria-label={`explore more about ${city.city}`}
            className="primary-btn"
          >
            Explore more
          </a>
        </section>
      </div>
    </section>
  );
};

export default CardCity;
