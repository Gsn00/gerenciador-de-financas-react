function Select(props) {
  return (
    <select
      {...props}
      className={`cursor-pointer border border-gray-300 outline-gray-800 rounded-md py-0.5 px-3 ${props.className}`}
    ></select>
  );
}

export default Select;
