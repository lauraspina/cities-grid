import React, { ReactNode } from "react";
import "../styles/components/Container.scss";

interface ContainerProps {
  children: ReactNode;
}

export const Container: React.FC<ContainerProps> = ({ children }) => {
  return <section className="container">{children}</section>;
};
