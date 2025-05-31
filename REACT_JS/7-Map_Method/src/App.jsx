import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const foodItem = ["Roti", "Dal", "Rice", "Sabhji", "Salad"];
  return (
    <>
      <h1>Healthy Food Center</h1>
      <ul className="list-group list-group-flush">
        {foodItem.map((item) => (
          <li key={item} className="list-group-item">
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
