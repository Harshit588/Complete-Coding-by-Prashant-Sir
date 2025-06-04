import PrintFoodItems from "./PrintFoodItems";

function FoodItems(props) {
  return (
    <ul className="list-group list-group-flush">
      {props.foodItem.map((item) => (
        <PrintFoodItems key={item} foodItem={item}></PrintFoodItems>
      ))}
    </ul>
  );
}

export default FoodItems;
