import { useParams, Link } from "react-router-dom";

function Visualization() {
  const { id } = useParams();

  const content = {
    vis1: {
      title: "CO vs Health Risk",

      tool: "This visualization was developed using Plotly and integrates merged environmental and health datasets. CO levels are mapped against daily Health Risk Scores to identify direct relationships between pollution exposure and medical impact.",

      mechanics:
        "A dual-axis approach is used to compare two variables over time. The X-axis represents time progression, while Y-axes represent CO concentration and Health Risk Score. Hover interactions allow detailed inspection of specific data points.",

      insight:
        "A strong positive correlation is observed where peaks in CO emissions align closely with spikes in health risk. This indicates that traffic-related pollution has an immediate and measurable effect on public health.",

      impact:
        "This insight suggests that reducing vehicular emissions during peak hours could significantly lower acute health risks, enabling better urban planning and public health preparedness.",
    },

    vis2: {
      title: "Weekend Recovery Effect",

      tool: "This violin plot was created using Plotly to visualize the distribution of severity scores across weekdays and weekends using aggregated health data.",

      mechanics:
        "The violin shape represents the distribution density of severity scores. Wider sections indicate higher frequency of occurrences, allowing comparison between weekday and weekend patterns.",

      insight:
        "Weekdays show higher severity levels, while weekends demonstrate a compressed distribution, indicating reduced health risk. This confirms a correlation between human activity and pollution exposure.",

      impact:
        "This pattern highlights the importance of traffic control policies and suggests that reducing weekday emissions could replicate the natural recovery observed during weekends.",
    },
    vis6: {
      title: "Weekend Recovery Effect",

      tool: "This visualization uses a Plotly violin plot to compare Day Type (Weekday vs. Weekend) against Health Severity Score, a composite metric derived from pollutant exposure (CO, NO₂, Benzene) and environmental conditions (temperature, humidity). The dataset aggregates daily observations, categorizing them into temporal groups to assess behavioral and environmental shifts. This mapping isolates temporal patterns while holding measurement consistency across variables.",

      mechanics:
        "The x-axis represents categorical day types, while the y-axis encodes the continuous severity score. The violin shape illustrates the full distribution density, with embedded box plots indicating median, quartiles, and spread. Overlaid scatter points provide raw data visibility, enhancing transparency of distribution and outliers. This dual encoding allows both statistical summary and granular inspection.",

      insight:
        "Weekend severity scores show a slightly lower median and tighter distribution compared to weekdays, indicating reduced health risk variability. This suggests a correlation between reduced urban activity (e.g., traffic and industrial output) and improved air quality conditions. The broader spread during weekdays implies more frequent exposure spikes, likely driven by peak emissions. Overall, temporal patterns align with pollution-driven health variability.",

      impact:
        "The observed “weekend recovery effect” highlights the impact of human activity patterns on public health risk. It suggests that targeted emission reduction strategies during high-activity weekdays could significantly lower overall health burden. Urban planners and policymakers can use this insight to design interventions such as traffic regulation or staggered work schedules. Ultimately, it reinforces the link between behavioral systems and environmental health outcomes.",
    },
  };

  const data = content[id];

  return (
    <div className="vis-container">
      <Link to="/" className="back-btn">⬅ Back</Link>

      <h1 className="vis-title">{data?.title || id}</h1>

      {/* CHART */}
      <div className="chart-section">
        <iframe src={`/assets/${id}.html`} title={id}></iframe>
      </div>

      {/* SECTION 1 */}
      <div className="info-card">
        <h3>🛠️ The Tool & Data Mapping</h3>
        <p>{data?.tool}</p>
      </div>

      {/* SECTION 2 */}
      <div className="info-card">
        <h3>⚙️ Visual Mechanics</h3>
        <p>{data?.mechanics}</p>
      </div>

      {/* SECTION 3 */}
      <div className="info-card highlight">
        <h3>🔗 The Core Insight & Correlation</h3>
        <p>{data?.insight}</p>
      </div>

      {/* SECTION 4 */}
      <div className="info-card impact">
        <h3>🌍 Real-World Implication</h3>
        <p>{data?.impact}</p>
      </div>
    </div>
  );
}

export default Visualization;