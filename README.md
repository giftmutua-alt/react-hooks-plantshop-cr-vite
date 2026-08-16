# 🌿 Plantsy Admin App

Plantsy is an admin-side application for managing a plant store. The designers have provided the components and CSS — your job is to bring the features to life by adding stateful logic and persisting data to the backend via the API.

---

## 🚀 Demo
Use the provided `demo.gif` as a reference for how the app should behave.

---

## 🛠 Setup

1. Install dependencies:
   ```bash
   npm install
Start the backend server (runs on port 6001):

bash
npm run server
In a new terminal, start the frontend:

bash
npm run dev
Verify your backend is running by visiting:
http://localhost:6001/plants

🌐 API Endpoints
Base URL: http://localhost:6001

GET /plants
Returns all plants.

Example Response:

json
[
  {
    "id": 1,
    "name": "Aloe",
    "image": "./images/aloe.jpg",
    "price": 15.99
  },
  {
    "id": 2,
    "name": "ZZ Plant",
    "image": "./images/zz-plant.jpg",
    "price": 25.98
  }
]
POST /plants
Adds a new plant.

Headers:

json
{
  "Content-Type": "application/json"
}
Request Body:

json
{
  "name": "string",
  "image": "string",
  "price": number
}
Example Response:

json
{
  "id": 3,
  "name": "Palm",
  "image": "./images/palm.jpg",
  "price": 20.00
}
📋 Deliverables
As a user:

View all plants when the app starts.

Add a new plant by submitting the form.

Mark a plant as "sold out" by toggling its stock status.

Search for plants by name and see a filtered list.

✅ Testing
Run the test suite with:

bash
npm test
The tests cover all deliverables:

Displays all plants on startup.

Adds a new plant via the form.

Marks a plant as sold out.

Filters plants by search input.

📂 Project Structure
Code
src/
  components/
    App.jsx
    Search.jsx
    NewPlantForm.jsx
    PlantList.jsx
    PlantCard.jsx
  __tests__/
    test_suites/
      AllPlants.test.jsx
      CreatePlant.test.jsx
      InStock.test.jsx
      SearchPlants.test.jsx
    App.test.jsx
setup.js
💡 Notes
Ensure your backend (json-server) is running on port 6001.

The frontend fetches data from http://localhost:6001/plants.

Tests rely on mocked fetch responses defined in setup.js.

Code

---

Gift, this README is tailored to your project — it documents setup, endpoints, deliverables, and