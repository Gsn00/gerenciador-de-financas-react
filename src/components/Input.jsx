function Input(props) {
  return (
    <input
      {...props}
      className={`border border-gray-300 outline-gray-800 rounded-md py-0.5 px-3 ${props.className}`}
    />
  );
}

export default Input;
