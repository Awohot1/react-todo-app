import React from "react";
const SearchBox = ({ value, onChange, onFocus, onClick, name }) => {
  return (
    <React.Fragment>
      <input
        className="bg-red-200  py-1 px-2 rounded-bl-md rounded-tl-md w-3/4 focus-within:outline-none text-gray-500"
        type="text"
        value={value}
        onChange={onChange}
        onFocus={onFocus}
      />
      <button
        className="bg-red-500 font-bold text-white  py-1 px-2 tracking-widest w-1/4 hover:bg-red-700"
        onClick={onClick}>
        {name}
      </button>
    </React.Fragment>
  );
};

export default SearchBox;
