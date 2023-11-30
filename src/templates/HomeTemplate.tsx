import React, { useState, useEffect } from "react";

import "../styles/components/GridCards.css";
import { GridCards } from "../components/grids/GridCards";
import { Card } from "../components/cards/Card";
import { Container } from "../components/Container";

interface City {
  id: number;
  country: string;
  city: string;
  image: string;
  intro: string;
  url: string;
}

export const HomeTemplate: React.FC = () => {
  const [cities, setCities] = useState<City[]>([]);
  const [loading, setLoading] = useState(true);

  const valtechCard = {
    pretitle: "front-end",
    title: "valtech_",
    video: "../assets/abstract.mp4",
    url: "https://www.valtech.com",
    subtitle:
      "We exist to unlock a better way to experience the world. As an experience innovation company, we empower people and businesses to thrive in a rapidly changing and connected world. We believe exceptional things happen at the intersection between different crafts, cultures, and perspectives and that the most exciting breakthroughs come from combining uncommon connections.",
  };

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
    <Container>
      <GridCards>
        <Card
          isTitleXL={true}
          pretitle={valtechCard.pretitle}
          title={valtechCard.title}
          video={valtechCard.video}
          url={valtechCard.url}
          subtitle={valtechCard.subtitle}
        />
        {cities.map((city) => (
          <Card
            key={city.id}
            title={city.city}
            pretitle={city.country}
            image={city.image}
            intro={city.intro}
            url={city.url}
          />
        ))}
      </GridCards>
    </Container>
  );
};
