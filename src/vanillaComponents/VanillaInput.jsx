import '../litComponents/simple-input';
const VanillaInput = ({ innerRef, placeholder, input, value }) => {
  return (
    <simple-input
      input={input}
      placeholder={placeholder}
      value={value}
      ref={innerRef}
    ></simple-input>
  );
};

export default VanillaInput;
