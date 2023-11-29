// server.js
const express = require("express");
const app = express();
const port = 3001;

const cities = [
  {
    id: 1,
    country: "Italy",
    city: "Venice",
    image:
      "https://images.unsplash.com/photo-1603489243637-66c1cfdd9b93?q=80&w=2722&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    intro: "The city that never sleeps...",
    url: "https://en.wikipedia.org/wiki/Venice",
  },
  {
    id: 2,
    country: "Germany",
    city: "Berlin",
    image:
      "https://images.unsplash.com/photo-1603489243637-66c1cfdd9b93?q=80&w=2722&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    intro: "The city that never sleeps...",
    url: "https://en.wikipedia.org/wiki/Berlin",
  },
  {
    id: 3,
    country: "Spain",
    city: "Barcelona",
    image:
      "https://images.unsplash.com/photo-1603489243637-66c1cfdd9b93?q=80&w=2722&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    intro: "The city that never sleeps...",
    url: "https://en.wikipedia.org/wiki/Barcelona",
  },
  {
    id: 4,
    country: "France",
    city: "Paris",
    image:
      "https://images.unsplash.com/photo-1603489243637-66c1cfdd9b93?q=80&w=2722&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    intro: "The city that never sleeps...",
    url: "https://en.wikipedia.org/wiki/Paris",
  },
  {
    id: 5,
    country: "Netherlands",
    city: "Amsterdam",
    image:
      "https://images.unsplash.com/photo-1603489243637-66c1cfdd9b93?q=80&w=2722&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    intro: "The city that never sleeps...",
    url: "https://en.wikipedia.org/wiki/Amsterdam",
  },
  {
    id: 6,
    country: "United Kingdom",
    city: "London",
    image:
      "https://images.unsplash.com/photo-1603489243637-66c1cfdd9b93?q=80&w=2722&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    intro: "The city that never sleeps...",
    url: "https://en.wikipedia.org/wiki/London",
  },
  // Add more cities as needed
];

app.get("/api/cities", (req, res) => {
  res.json(cities);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
