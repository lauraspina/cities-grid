import React, { useState, useEffect } from "react";
import CardCity from "./cards/CardCity";
import { GridCards } from "./grids/GridCards";
import "../styles/components/GridCards.css";

interface City {
  id: number;
  country: string;
  city: string;
  image: string;
  intro: string;
  url: string;
}

export const ListCards: React.FC = () => {
  const [cities, setCities] = useState<City[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/cities") // Assuming your backend is running on the same server
      .then((response) => response.json())
      .then((data: City[]) => {
        setCities(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>List of Cities</h1>
      <GridCards>
        {cities.map((city) => (
          <CardCity key={city.id} city={city} />
        ))}
      </GridCards>
    </div>
  );
};
