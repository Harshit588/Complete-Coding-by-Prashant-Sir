import React from "react";

export default function FoodInput() {
  const handleFoodInput = (event) => {
    console.log(event.target.value);
  };
  return (
    <div>
      <input
        type="text"
        onChange={(event) => {
          handleFoodInput(event);
        }}
      />
    </div>
  );
}
