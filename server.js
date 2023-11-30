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
    intro:
      "Venice is a city in northeastern Italy and the capital of the Veneto region. It is built on a group of 126 islands that are separated by expanses of open water and by canals; portions of the city are linked by 472 bridges.",
    url: "https://en.wikipedia.org/wiki/Venice",
  },
  {
    id: 2,
    country: "Germany",
    city: "Berlin",
    image:
      "https://images.unsplash.com/photo-1566404791232-af9fe0ae8f8b?q=80&w=3736&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    intro:
      "Berlin is the capital and largest city of Germany by both area and population. Its more than 3.85 million inhabitants make it the European Union's most populous city, according to population within city limits",
    url: "https://en.wikipedia.org/wiki/Berlin",
  },
  {
    id: 3,
    country: "Spain",
    city: "Barcelona",
    image:
      "https://images.unsplash.com/photo-1583422409516-2895a77efded?q=80&w=4140&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    intro:
      "Barcelona is a city on the northeastern coast of Spain. It is the capital and largest city of the autonomous community of Catalonia, as well as the second-most populous municipality of Spain. With a population of 1.6 million within city limits, its urban area extends to numerous neighbouring municipalities within the province of Barcelona and is home to around 4.8 million people, making it the fifth most populous urban area in the European Union after Paris, the Ruhr area, Madrid and Milan.",
    url: "https://en.wikipedia.org/wiki/Barcelona",
  },
  {
    id: 4,
    country: "France",
    city: "Paris",
    image:
      "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?q=80&w=3987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    intro:
      "Paris is the capital and most populous city of France. With an official estimated population of 2,102,650 residents as of 1 January 2023 in an area of more than 105 km2 (41 sq mi), Paris is the fifth-most populated city in the European Union and the 30th most densely populated city in the world in 2022.Since the 17th century, Paris has been one of the world's major centres of finance, diplomacy, commerce, culture, fashion, gastronomy and many areas. For its leading role in the arts and sciences, as well as its early and extensive system of street lighting, in the 19th century, it became known as the City of Light.",
    url: "https://en.wikipedia.org/wiki/Paris",
  },
  {
    id: 5,
    country: "Netherlands",
    city: "Amsterdam",
    image:
      "https://images.unsplash.com/photo-1580996378027-23040f16f157?q=80&w=3276&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    intro:
      'Amsterdam is the capital and most populated city of the Netherlands, with The Hague being the seat of government. It has a population of 921,402 within the city proper, 1,457,018 in the urban area and 2,480,394 in the metropolitan area. Located in the Dutch province of North Holland, Amsterdam is colloquially referred to as the "Venice of the North", for its large number of canals, now designated a UNESCO World Heritage Site.',
    url: "https://en.wikipedia.org/wiki/Amsterdam",
  },
  {
    id: 6,
    country: "United Kingdom",
    city: "London",
    image:
      "https://images.unsplash.com/photo-1526129318478-62ed807ebdf9?q=80&w=2292&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    intro:
      "London is the capital and largest city of England and the United Kingdom, with a population of around 8.8 million. It stands on the River Thames in south-east England at the head of a 50-mile (80 km) estuary down to the North Sea and has been a major settlement for nearly two millennia. The City of London, its ancient core and financial centre, was founded by the Romans as Londinium and retains its medieval boundaries.",
    url: "https://en.wikipedia.org/wiki/London",
  },
];

app.get("/api/cities", (req, res) => {
  res.json(cities);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
