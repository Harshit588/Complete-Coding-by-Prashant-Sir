import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  let foodItem = ["Roti", "Dal", "Rice", "Sabhji", "Salad"];
  foodItem = [];

  // if (foodItem.length === 0) {
  //   return <h2>I AM HUNGURY</h2>;
  // }

  return (
    <>
      <h1>Healthy Food Center</h1>

      {/* { foodItem.length === 0 ? <h2>I AM HUNGURY</h2> : null} */}

      {foodItem.length === 0 && <h2>I AM HUNGURY</h2>}

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
