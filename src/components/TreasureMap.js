import "../styles/TreasureMap.css";

function TreasureMap() {
  const steps = [
    "Start Here",
    "Step #1: Tech Audits and Assessments",
    "Step #2: Found the IDAC Podcast",
    "Step #3: The Insane / Long Story and Long Shot",
    "Step #4: Identiverse",
    "Step #5: What Comes Next...",
    "Step #6: What Comes Next If Not 'Game Over'",
    "Step #7: Happening Unless 'Out of Lives Left'"
  ];

  return (
    <section className="treasure-map">
      <h1>Technology Treasure Map</h1>

      <div className="map-path">
        {steps.map((step, index) => (
          <div key={index} className="map-node">
            <div className="node-circle">{index}</div>
            <p>{step}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TreasureMap;