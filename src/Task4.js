import React, { useState } from "react";

function Task4() {
  const [city, setCity] = useState("");
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState("");

  const handleAddCity = () => {
    if (city !== "") {
      setCities([...cities, city]);
      setCity("");
    }
  };

  const handleCitySelect = (e) => {
    setSelectedCity(e.target.value);
  };

  return (
    <div>
      <label htmlFor="city-input">Add city: </label>
      <input
        type="text"
        id="city-input"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={handleAddCity}>Add</button>
      <br />
      <label htmlFor="city-select">Select a city: </label>
      <select id="city-select" value={selectedCity} onChange={handleCitySelect}>
        <option value="">--Select a city--</option>
        {cities.map((city, index) => (
          <option key={index} value={city}>
            {city}
          </option>
        ))}
      </select>
      <br />
      <p>Selected city: {selectedCity}</p>
    </div>
  );
}

export default Task4;
