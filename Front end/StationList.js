import React, { useEffect, useState } from "react";
import axios from "axios";
import StationCard from "./StationCard";
import SearchBar from "./SearchBar";

const StationList = () => {
  const [stations, setStations] = useState([]);
  const [filteredStations, setFilteredStations] = useState([]);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/stations`)
      .then((response) => {
        setStations(response.data);
        setFilteredStations(response.data);
      })
      .catch((error) => console.error("Error fetching stations:", error));
  }, []);

  const handleSearch = (query) => {
    const results = stations.filter((station) => 
      station.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredStations(results);
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <div className="station-list">
        {filteredStations.map((station) => (
          <StationCard key={station.id} station={station} />
        ))}
      </div>
    </div>
  );
};

export default StationList;
