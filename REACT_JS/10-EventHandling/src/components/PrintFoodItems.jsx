function PrintFoodItems({ foodItem }) {
  const d = "mx-2 float-end";

  const handleBuyItem = (event) => {
    console.log(event);
    console.log(`${foodItem} bought`);
  };

  return (
    <p className="list-group-item">
      {foodItem}
      <button
        type="button"
        className={`${d} btn btn-info`}
        onClick={(event) => handleBuyItem(event)}
      >
        Buy
      </button>
    </p>
  );
}

export default PrintFoodItems;
