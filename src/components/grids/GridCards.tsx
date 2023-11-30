import React, { ReactNode } from "react";
import "../../styles/components/GridCards.scss";

interface GridCardsProps {
  children: ReactNode;
}

export const GridCards: React.FC<GridCardsProps> = ({ children }) => {
  return <div className="grid-cards">{children}</div>;
};
