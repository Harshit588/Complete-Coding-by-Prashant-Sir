function ErrorMessage(props) {
  return props.foodItem.length === 0 && <h2>I AM HUNGURY</h2>;
}

export default ErrorMessage;
