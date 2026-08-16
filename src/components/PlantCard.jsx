import React from "react";

function PlantCard({ plant, onToggleStock }) {
  return (
    <div data-testid="plant-item">
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      <img src={plant.image} alt={plant.name} />
      <button onClick={() => onToggleStock(plant.id)}>
        {plant.inStock ? "In Stock" : "Out of Stock"}
      </button>
    </div>
  );
}

export default PlantCard;



