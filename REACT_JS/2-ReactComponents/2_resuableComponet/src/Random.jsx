function Random() {
  let randomNumber = Math.random() * 100;
  return (
    <h2 style={{ backgroundColor: "black", color: "white" }}>
      Random Number is :: {Math.round(randomNumber)}
    </h2>
  );
}
export default Random;
