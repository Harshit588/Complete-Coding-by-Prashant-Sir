import "bootstrap/dist/css/bootstrap.min.css";
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";

function App() {
  let foodItem = ["Roti", "Dal", "Rice", "Sabhji", "Salad"];
  // foodItem = [];

  return (
    <>
      <h1>Healthy Food Center</h1>
      <FoodItems foodItem={foodItem} />
      <ErrorMessage foodItem={foodItem} />
    </>
  );
}

export default App;
