import React from "react";

function PlantPage({ plant }) {
  return (
    <div>
      <h2>{plant.name}</h2>
      <p>Price: ${plant.price}</p>
    </div>
  );
}

export default PlantPage;


