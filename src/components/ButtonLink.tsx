import React from "react";
import "../styles/components/ButtonLink.css";

interface ButtonLinkProps {
  href: string;
  cta: string;
  external?: boolean;
}

export const ButtonLink = ({
  href,
  cta,
  external = false,
}: ButtonLinkProps) => {
  return (
    <a href={href} className="button-link" target={external ? "_blank" : ""}>
      {cta}
    </a>
  );
};
