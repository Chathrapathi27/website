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
    vis3: {
      title: "Temperature–Benzene Interaction Surface on Health Risk",

      tool: "This Plotly 3D surface plot maps Temperature (Temp) and Benzene concentration as independent variables along the X and Y axes, respectively, with Health Risk Score encoded as the Z-axis and color gradient. The dataset integrates environmental exposure variables with a composite health metric to model joint effects. This structure enables simultaneous analysis of pollutant–climate interactions on health outcomes.",

      mechanics:
        "The surface plot interpolates health risk values across a continuous grid formed by temperature and benzene levels. Elevation (Z-axis) and color intensity jointly encode the magnitude of the health risk score, enhancing perceptual clarity of peaks and valleys. The 3D perspective allows users to identify nonlinear relationships, interaction effects, and threshold zones where risk escalates.",

      insight:
        "Health risk increases nonlinearly with rising benzene levels, but this effect is amplified at higher temperatures, indicating a strong interaction effect. The surface peak suggests that combined exposure to elevated temperature and benzene produces disproportionately higher health risks compared to either factor alone. This implies a synergistic relationship where temperature may intensify pollutant toxicity or exposure impact. Lower regions of the surface confirm relatively reduced risk under cooler and low-benzene conditions.",

      impact:
        "The findings highlight the compounded danger of pollution during warmer periods, particularly in urban heat-prone environments. This suggests that climate conditions can exacerbate chemical exposure risks, necessitating integrated environmental and public health policies. Authorities can use this insight to issue targeted warnings during hot, high-pollution days. It reinforces the need for coordinated strategies addressing both emissions control and urban heat mitigation.",
    },
    vis4: {
      title: "Humidity–NO₂ Interaction with Health Severity Scaling",

      tool: "This Tableau bubble scatter plot maps Humidity and NO₂ concentration as the primary environmental variables on the X and Y axes. The Severity Score is encoded as bubble size, representing the magnitude of health impact associated with each observation. This multi-dimensional mapping integrates atmospheric conditions, pollutant concentration, and health outcomes into a single analytical view.",

      mechanics:
        "Each data point is plotted based on its humidity and NO₂ values, with bubble size proportionally scaled to the severity score. Larger bubbles indicate higher health risk, enabling immediate visual prioritization of critical conditions. The scatter structure supports identification of clustering patterns, while size encoding adds a third dimension for impact assessment without overcrowding the plot.",

      insight:
        "Higher NO₂ concentrations combined with elevated humidity levels tend to produce larger bubbles, indicating increased health severity. This suggests a compounding effect where humid conditions may enhance pollutant persistence or respiratory absorption. Clusters of large bubbles in specific regions of the plot reveal environmental “risk zones” rather than isolated events. The relationship indicates that both variables jointly influence the intensity of health outcomes.",

      impact:
        "The visualization highlights that environmental conditions, not just pollutant levels, play a critical role in determining health impact severity. Public health strategies can incorporate humidity forecasts alongside pollution monitoring to improve risk prediction. This enables more precise advisories, particularly for vulnerable populations during high-risk atmospheric conditions. It reinforces the need for integrated environmental-health surveillance systems.",
    },
    vis5: {
      title: "Pollution Baseline vs. Respiratory Events",

      tool: "This Power BI composite visualization maps time (Date/Month) on the X-axis, with average pollutant concentrations (CO, NO₂, Benzene) represented as stacked columns on the primary Y-axis. The Health Risk Score (or Severity Score) is overlaid as a line on a secondary Y-axis, capturing temporal health trends. This structure enables comparison between baseline pollution load and aggregated respiratory health outcomes.",

      mechanics:
        "TStacked columns encode cumulative pollution exposure by layering individual pollutant averages, providing a holistic “pollution volume” per time unit. The superimposed line chart tracks fluctuations in health risk, visually aligned with pollution peaks and troughs. Dual-axis encoding allows simultaneous interpretation of magnitude (columns) and trend (line) without conflating scales.",

      insight:
        "Periods with elevated stacked pollution levels consistently align with peaks in the health risk line, indicating a strong positive association between cumulative pollutant exposure and respiratory events. Sharp increases in NO₂ and Benzene contributions appear to drive noticeable spikes in health risk, suggesting differential pollutant impact. Temporal dips in pollution correspond with reduced health scores, reinforcing the exposure-response relationship. This pattern highlights both cumulative and pollutant-specific effects on public health.",

      impact:
        "The visualization demonstrates that sustained multi-pollutant exposure, rather than isolated emissions, significantly elevates respiratory health risks. It supports the need for integrated air quality management targeting multiple pollutants simultaneously. Policymakers can use these insights to prioritize interventions during high-load periods and monitor effectiveness over time. Ultimately, it underscores the importance of continuous pollution surveillance to mitigate large-scale health impacts.",
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
    vis7: {
      title: "Pollutant Clusters to Specific Symptoms Network",

      tool: "This D3.js network graph models relationships between pollutant clusters (e.g., NOₓ, CO combinations) as source nodes and medical outcomes (e.g., respiratory, cardiovascular conditions) as target nodes. Edges represent correlation strength, derived from statistical associations between pollutant exposure patterns and categorized health outcomes. This structure transforms multivariate correlations into an interpretable cause–effect network.",

      mechanics:
        "Nodes are spatially arranged using a force-directed layout, where proximity reflects relational strength and interaction frequency. Edge thickness and opacity encode correlation magnitude, while node size can represent relative importance or frequency of occurrence. Interactive behaviors (hover, highlight, filtering) allow users to isolate specific pollutant–symptom pathways for detailed inspection.",

      insight:
        "Distinct pollutant clusters form strong, directed connections to specific health outcomes, revealing differentiated impact pathways rather than uniform effects. For example, NOₓ-dominant clusters tend to align more closely with respiratory conditions, while mixed CO-related clusters show broader associations, including cardiovascular effects. The network structure highlights that combined exposures amplify or shift health risks compared to single pollutants. This supports a multi-factorial causation model rather than isolated pollutant effects.",

      impact:
        "The visualization enables targeted public health interventions by identifying which pollutant combinations drive specific medical conditions. Healthcare systems can anticipate symptom surges based on prevailing pollutant profiles, improving preparedness and response. Policymakers can design more precise emission controls by focusing on harmful pollutant interactions rather than individual gases. Ultimately, it advances data-driven environmental health strategies by linking exposure patterns directly to clinical outcomes.",
    },
    vis8: {
      title: "Proxy Pollutant (NOₓ) vs. Health Risk Score",

      tool: "This Plotly regression scatter plot maps NOₓ concentration as the independent variable on the X-axis and Health Risk Score as the dependent variable on the Y-axis. NOₓ serves as a proxy pollutant, representing broader traffic-related emission patterns validated in prior analysis. The inclusion of an R²-based trendline quantifies the strength of the relationship between pollution exposure and health outcomes.",

      mechanics:
        "Individual data points represent daily observations, plotted to show the distribution of health risk across varying NOₓ levels. A fitted regression line overlays the scatter, with its slope indicating directionality and its R² value summarizing explanatory power. The visualization emphasizes both dispersion (variability) and central tendency (trend), enabling statistical interpretation alongside visual analysis.",

      insight:
        "The upward-sloping regression line indicates a strong positive relationship between NOₓ levels and health risk scores. A relatively high R² value suggests that NOₓ alone explains a significant portion of variability in health outcomes, validating its role as an effective proxy for overall pollution exposure. The spread of points around the line reflects secondary influences (e.g., temperature, humidity), but the dominant trend remains clear. This confirms that increases in NOₓ are consistently associated with elevated health risks.",

      impact:
        "Using NOₓ as a proxy simplifies real-time monitoring and predictive modeling of public health risk. Environmental agencies can prioritize NOₓ tracking to trigger early warnings and interventions without needing full pollutant panels. This enables faster, more scalable decision-making in urban air quality management. Ultimately, it supports efficient, data-driven strategies to mitigate pollution-related health impacts.",
    },
    vis9: {
      title: "Smog Days vs. Normal Days Health Impact",

      tool: "This Power BI jitter plot categorizes observations into Day Type (Smog Days vs. Normal Days) based on extreme pollution thresholds identified in prior analysis. The Health Risk Score is mapped as the distribution variable, capturing the variation in health outcomes across these two groups. This setup isolates high-pollution outliers and compares their direct impact against baseline conditions.",

      mechanics:
        "Data points are horizontally jittered within each category to prevent overlap, allowing clear visualization of distribution density and spread. The Y-axis represents health risk scores, while color encoding differentiates smog days from normal days. This structure emphasizes both central tendency (median shift) and dispersion (range of outcomes) within each group.",

      insight:
        "Smog days exhibit a noticeable upward shift in health risk scores, with a tighter clustering at higher values compared to normal days. This indicates that extreme pollution events consistently elevate health risks rather than producing random variation. The reduced overlap between the two distributions reinforces a strong causal relationship between smog conditions and adverse health outcomes. These patterns validate that outlier pollution days disproportionately drive public health burden.",

      impact:
        "The clear separation between smog and normal days highlights the urgency of managing extreme pollution events. Public health systems can use this insight to trigger emergency responses, such as advisories or temporary emission restrictions, during high-risk periods. It also supports targeted interventions for vulnerable populations when smog conditions are forecasted. Ultimately, mitigating peak pollution days can significantly reduce overall health risk at the population level.",
    },
  };

  const data = content[id];

  return (
    <div className="vis-container">
      <Link to="/" className="back-btn">
        ⬅ Back
      </Link>

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
