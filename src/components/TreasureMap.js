import "../styles/TreasureMap.css";

function TreasureMap() {
  const steps = [
    {
      title: "Start Here",
      left: "8%",
      top: "72%"
    },
    {
      title: "Tech Audits",
      left: "20%",
      top: "40%"
    },
    {
      title: "Found IDAC",
      left: "35%",
      top: "62%"
    },
    {
      title: "The Long Shot",
      left: "48%",
      top: "28%"
    },
    {
      title: "Identiverse",
      left: "64%",
      top: "50%"
    },
    {
      title: "What's Next?",
      left: "78%",
      top: "30%"
    },
    {
      title: "Level Up",
      left: "88%",
      top: "65%"
    }
  ];

  return (
    <section className="treasure-map">
      <div className="map-overlay">
        <h1>Technology Treasure Map</h1>
        <p>
          Follow the winding path that led from technology risk
          consulting to Identity Access Management.
        </p>
      </div>

      {steps.map((step, index) => (
        <div
          key={index}
          className="map-marker"
          style={{
            left: step.left,
            top: step.top
          }}
        >
          <div className="marker-number">{index}</div>
          <span>{step.title}</span>
        </div>
      ))}

      <div className="treasure-chest">
        💎 IAM Learning
      </div>
    </section>
  );
}

export default TreasureMap;