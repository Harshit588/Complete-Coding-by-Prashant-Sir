import "bootstrap/dist/css/bootstrap.min.css";
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import Container from "./components/Container";

function App() {
  let foodItem = ["Roti", "Dal", "Rice", "Sabhji", "Salad"];
  // foodItem = [];

  return (
    <>
      <Container>
        <h1>Healthy Food Center</h1>
        <FoodItems foodItem={foodItem} />
        <ErrorMessage foodItem={foodItem} />
      </Container>

      <Container>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Reprehenderit, esse!
        </p>
      </Container>
    </>
  );
}

export default App;
