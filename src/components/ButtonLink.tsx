import React from "react";
import "../styles/components/ButtonLink.scss";

interface ButtonLinkProps {
  href: string;
  title: string;
  cta: string;
  external?: boolean;
}

export const ButtonLink = ({
  href,
  title,
  cta,
  external = false,
}: ButtonLinkProps) => {
  return (
    <a
      href={href}
      title={title}
      className="button-link"
      target={external ? "_blank" : ""}
      rel="noreferrer"
    >
      {cta}
    </a>
  );
};
