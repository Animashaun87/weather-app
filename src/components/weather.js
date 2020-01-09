import React from "react";

function Weather() {
  return (
    <div className="container">
      <div className="cards">
        <h1>London</h1>
        <h5 className="py-4">icon</h5>
        <h1 className="py-2">25&deg;</h1>
        {/** Show max and min temp */}
        {temperature(24, 19)}

        <h4 className="py-3">Slow Rain</h4>
      </div>
    </div>
  );

  function temperature(min, max) {
    return (
      <h3>
        <span className="px-4">{min}&deg;</span>
        <span className="px-4">{max}</span>
      </h3>
    );
  }
}

export default Weather;
