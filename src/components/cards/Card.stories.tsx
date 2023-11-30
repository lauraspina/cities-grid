// src/components/Card.stories.tsx

import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Card } from "./Card";

const meta: Meta<typeof Card> = {
  title: "cards/Card",
  component: Card,
  decorators: [(Story) => <Story />],
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    pretitle: "Italy",
    title: "Venice",
    image:
      "https://images.unsplash.com/photo-1603489243637-66c1cfdd9b93?q=80&w=2722&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    intro:
      "Venice is a city in northeastern Italy and the capital of the Veneto region. It is built on a group of 126 islands that are separated by expanses of open water and by canals; portions of the city are linked by 472 bridges.",
    url: "https://en.wikipedia.org/wiki/Venice",
  },
};
