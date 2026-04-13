import { useState } from "react";
import Navbar from "../components/navBar";
import Filters from "../components/Filters";
import Card from "../components/Card";

function Home() {
  const [filters, setFilters] = useState({});

  const visualizations = [
    { id: "vis1", title: "CO vs Health Risk" },
    { id: "vis2", title: "Weekend Recovery (Violin)" },
    { id: "vis3", title: "Calendar Heatmap" },
    { id: "vis4", title: "Humidity vs NO2" },
    { id: "vis5", title: "Correlation Heatmap" },
    { id: "vis6", title: "3D Surface Plot" },
    { id: "vis7", title: "Seasonal Area Chart" },
    { id: "vis8", title: "Regression Plot" },
    { id: "vis9", title: "Network Graph" },
  ];

  return (
    <div>
      <Navbar />
      <div className="hero">
        <h1>Eco-Health</h1>
        <h2>Urban Air Quality and Health Risk Analysis</h2>
        <p>
          Exploring the invisible connection between pollution, weather, and
          human health in urban environments.
        </p>
      </div>

      <Filters setFilters={setFilters} />

      <div className="grid">
        {visualizations.map((v) => (
          <Card key={v.id} id={v.id} title={v.title} />
        ))}
      </div>
    </div>
  );
}

export default Home;
