import React, { useEffect, useState } from "react";
import Search from "./Search";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";

function App() {
  const [plants, setPlants] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((res) => res.json())
      .then((data) => setPlants(data));
  }, []);

  function handleAddPlant(newPlant) {
    setPlants([...plants, { ...newPlant, id: plants.length + 1 }]);
  }

  function handleToggleStock(id) {
    setPlants((plants) =>
      plants.map((plant) =>
        plant.id === id ? { ...plant, inStock: !plant.inStock } : plant
      )
    );
  }

  const filteredPlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>🌿 Plant Shop 🌿</h1>
      <Search searchTerm={searchTerm} onSearch={setSearchTerm} />
      <NewPlantForm onAddPlant={handleAddPlant} />
      <PlantList plants={filteredPlants} onToggleStock={handleToggleStock} />
    </div>
  );
}

export default App;
