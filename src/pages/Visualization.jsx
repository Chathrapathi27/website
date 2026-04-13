import { useParams, Link } from "react-router-dom";

function Visualization() {
  const { id } = useParams();

  const content = {
    vis1: {
      title: "CO vs Health Risk",
      explanation:
        "This visualization demonstrates how carbon monoxide levels fluctuate with urban traffic patterns.",
      correlation:
        "A strong positive correlation exists between CO levels and health risk scores, especially during peak traffic hours.",
    },
    vis2: {
      title: "Weekend Recovery Effect",
      explanation:
        "This violin plot shows distribution of severity scores across weekdays and weekends.",
      correlation:
        "Severity significantly drops during weekends, proving reduced traffic lowers health risk.",
    },
  };

  return (
    <div className="vis-container">
      <Link to="/" className="back-btn">
        ⬅ Back
      </Link>

      <h1 className="vis-title">{content[id]?.title || id}</h1>

      {/* CHART SECTION */}
      <div className="chart-section">
        <iframe src={`/assets/${id}.html`} title={id}></iframe>
      </div>

      {/* EXPLANATION */}
      <div className="info-card">
        <h3>📖 Explanation</h3>
        <p>{content[id]?.explanation}</p>
      </div>

      {/* CORRELATION */}
      <div className="info-card highlight">
        <h3>🔗 Correlation Insights</h3>
        <p>{content[id]?.correlation}</p>
      </div>
    </div>
  );
}

export default Visualization;
