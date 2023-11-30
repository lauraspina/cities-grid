import React from "react";
import "../../styles/components/Card.scss";
import { ButtonLink } from "../ButtonLink";

interface CardProps {
  pretitle?: string;
  title: string;
  isTitleXL?: boolean;
  image?: string;
  video?: string;
  intro?: string;
  url?: string;
  subtitle?: string;
}

export const Card: React.FC<CardProps> = ({
  image,
  title,
  isTitleXL = false,
  subtitle,
  video,
  pretitle,
  intro,
  url,
}) => {
  return (
    <section className="card" role="article">
      {image && !video && <img src={image} alt={title} />}
      {video && (
        <video
          src={video}
          autoPlay
          muted
          loop
          playsInline
          width="100%"
          height="100%"
          style={{ objectFit: "cover" }}
        />
      )}
      <div className="card-overlay" role="presentation">
        <section className="card-section-visible">
          {pretitle && <h3 className="card-pretitle">{pretitle}</h3>}
          {title && (
            <h2 className={`card-title ${isTitleXL ? "xl" : ""}`}>{title}</h2>
          )}
          {subtitle && <p className="card-subtitle">{subtitle}</p>}
        </section>
        <section className="card-section-hidden">
          {intro && <p className="card-intro">{intro}</p>}
          {url && <ButtonLink external cta="Learn more" href={url} />}
        </section>
      </div>
    </section>
  );
};
