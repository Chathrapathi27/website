import { useState } from "react";
import Navbar from "../components/navBar";
import Filters from "../components/Filters";
import Card from "../components/Card";

function Home() {
  const [filters, setFilters] = useState({});

  const visualizations = [
    { id: "vis1", title: "Daily Max CO vs. Health Risk Score" },
    { id: "vis2", title: "Seasonal NO₂ Exposure & Health Risk Calendar" },
    { id: "vis3", title: "Temp + Benzene vs. Health Risk" },
    { id: "vis4", title: "Humidity vs NO₂ Impact" },
    { id: "vis5", title: "Pollution Baseline vs. Respiratory Events" },
    { id: "vis6", title: "Weekend Recovery Effect" },
    { id: "vis7", title: "Pollutant Clusters to Specific Symptoms" },
    { id: "vis8", title: "Proxy Pollutant NO₂ vs. Health Risk Score" },
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
