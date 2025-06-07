import styles from "./FoodItems.module.css"; // import the CSS module
import PrintFoodItems from "./PrintFoodItems";

function FoodItems(props) {
  return (
    <ul className={styles.list}>
      {props.foodItem.map((item) => (
        <li key={item} className={styles.item}>
          <PrintFoodItems foodItem={item} />
        </li>
      ))}
    </ul>
  );
}

export default FoodItems;
