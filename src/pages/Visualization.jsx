import { useParams, Link } from "react-router-dom";

function Visualization() {
  const { id } = useParams();

  const content = {
    vis1: {
      title: "Daily Max CO vs. Health Risk Score",

      tool: "This visualization uses Tableau to map daily average CO concentration (CO GT) and Health Risk Score across a temporal axis (Day of Date). CO levels act as a proxy for traffic-related air pollution, while the health risk score aggregates exposure effects from multiple pollutants and environmental factors. The dual-variable mapping enables direct temporal comparison between pollution intensity and health outcomes.",

      mechanics:
        "The chart employs a dual-axis line structure, with CO concentration plotted on the primary y-axis and health risk score on the secondary y-axis. Both variables are encoded as continuous lines over the same time axis, allowing synchronized trend analysis. This structure highlights co-movements, divergences, and temporal lag effects between pollution spikes and health responses.",

      insight:
        "Periods of elevated CO levels generally align with increases in health risk scores, indicating a positive correlation between traffic emissions and adverse health conditions. Notably, sharp fluctuations in CO are often followed by corresponding shifts in health risk, suggesting short-term exposure effects. Instances where CO drops significantly coincide with reduced or stabilized health risk, reinforcing the causal linkage. The data supports the hypothesis that daily pollution timing influences acute health variability.",

      impact:
        "This pattern demonstrates that peak traffic emissions have immediate and measurable impacts on public health risk. It underscores the importance of managing high-emission time windows, such as rush hours, to mitigate short-term health effects. Policymakers can leverage this insight to implement dynamic traffic controls or emission reduction strategies during critical periods. Ultimately, aligning urban mobility planning with health data can reduce pollution-driven health incidents.",
    },

    vis2: {
      title: "Seasonal NO₂ Exposure & Health Risk Calendar",

      tool: "This D3.js calendar heatmap maps the Date variable onto a monthly grid structure, preserving temporal continuity across weeks and days. NO₂ (GT) concentrations are encoded as a continuous color scale to represent pollution intensity, while Health Risk Score (or hospital admissions) is embedded numerically within each cell and expanded via tooltips. The design integrates environmental exposure with health outcomes at a daily granularity.",

      mechanics:
        "Each cell represents a single day, arranged in a calendar format (rows as weeks, columns as weekdays), enabling intuitive temporal scanning. Color intensity encodes NO₂ levels, with darker shades indicating higher pollution, while overlaid numeric labels provide immediate access to health risk magnitude. Interactive tooltips enhance detail-on-demand, allowing users to inspect exact values and contextual relationships.",

      insight:
        "Clusters of high-intensity color reveal sustained periods of elevated NO₂, often aligning with higher embedded health risk values. These “hot weeks” indicate temporal accumulation effects, where prolonged exposure amplifies respiratory health impacts. The co-location of darker cells and higher scores suggests a strong positive correlation between NO₂ concentration and hospital-related outcomes. Temporal clustering further implies that health effects are not isolated but persist across consecutive days of exposure.",

      impact:
        "Identifying peak pollution weeks enables proactive public health interventions, such as issuing air quality alerts or mobilizing healthcare resources. The visualization supports policy decisions targeting seasonal emission patterns, including traffic regulation or industrial controls during high-risk periods. For individuals, it provides actionable awareness of when exposure risks are highest. Ultimately, it reinforces the importance of continuous environmental monitoring in mitigating long-term respiratory health burdens.",
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