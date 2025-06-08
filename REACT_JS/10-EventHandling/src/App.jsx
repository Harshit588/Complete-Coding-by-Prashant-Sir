import "bootstrap/dist/css/bootstrap.min.css";
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";

function App() {
  let foodItem = ["Roti", "Dal", "Rice", "Sabhji", "Salad"];
  // foodItem = [];

  return (
    <>
      <Container>
        <h1>Healthy Food Center</h1>
        <FoodInput></FoodInput>
        <FoodItems foodItem={foodItem} />
        <ErrorMessage foodItem={foodItem} />
      </Container>
    </>
  );
}

export default App;
