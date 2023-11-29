import React, { ReactNode } from "react";
import "../../styles/components/GridCards.css";

interface GridCardsProps {
  children: ReactNode;
}

export const GridCards: React.FC<GridCardsProps> = ({ children }) => {
  return <div className="grid-cards">{children}</div>;
};
