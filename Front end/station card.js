import React from "react";

const StationCard = ({ station }) => {
  return (
    <div className="station-card">
      <h2>{station.name}</h2>
      <p><strong>Location:</strong> {station.location}</p>
      <p><strong>Available Ports:</strong> {station.ports}</p>
      <p><strong>Price per kWh:</strong> ${station.price}</p>
    </div>
  );
};

export default StationCard;
