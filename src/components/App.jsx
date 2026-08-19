import React, { useEffect, useState } from "react";
import Header from "./Header";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function App() {
  const [plants, setPlants] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // ✅ GET all plants
  useEffect(() => {
    async function loadPlants() {
      const res = await fetch("http://localhost:6001/plants");
      const data = await res.json();
      setPlants(data);
    }
    loadPlants();
  }, []);

  // ✅ POST new plant
  function handleAddPlant(newPlant) {
    setPlants([...plants, newPlant]);
  }

  // ✅ Toggle stock
  function handleToggleStock(id) {
    setPlants((plants) =>
      plants.map((plant) =>
        plant.id === id ? { ...plant, inStock: !plant.inStock } : plant
      )
    );
  }

  // ✅ Filter plants by search term
  const filteredPlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <Header />
      {/* Only ONE search input here */}
      <Search searchTerm={searchTerm} onSearch={setSearchTerm} />
      <NewPlantForm onAddPlant={handleAddPlant} />
      <PlantList plants={filteredPlants} onToggleStock={handleToggleStock} />
    </div>
  );
}

export default App;


