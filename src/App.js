import React, { useState } from "react";
import Weather from "./components/weather";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const [location, setLocation] = useState({
    city: undefined,
    country: undefined,
    icon: undefined,
    main: undefined,
    celsius: undefined,
    temp_max: undefined,
    temp_min: undefined,
    description: "",
    error: false
  });
  return (
    <div className="App">
      <Weather
        city={}
        country={}
        temp_celsius={}
        temp_min={}
        temp_max={}
        description={}
      />
    </div>
  );
}

export default App;
