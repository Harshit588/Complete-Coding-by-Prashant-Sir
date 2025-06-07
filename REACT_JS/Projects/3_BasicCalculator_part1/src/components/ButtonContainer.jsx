import React from "react";
import style from "./ButtonContainer.module.css";

function ButtonContainer() {
  const buttons = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "9",
    "0",
    "=",
    ".",
  ];
  return (
    <div className={style.buttons}>
      {buttons.map((buttonName) => (
        <button>{buttonName}</button>
      ))}
    </div>
  );
}

export default ButtonContainer;
