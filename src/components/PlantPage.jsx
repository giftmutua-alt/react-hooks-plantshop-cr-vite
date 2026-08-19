import React from "react";

function PlantPage({ plant }) {
  if (!plant) return <p>No plant selected.</p>;

  return (
    <div>
      <h2>{plant.name}</h2>
      <img src={plant.image} alt={plant.name} />
      <p>Price: ${plant.price}</p>
      <p>{plant.inStock ? "Available" : "Sold Out"}</p>
    </div>
  );
}

export default PlantPage;



