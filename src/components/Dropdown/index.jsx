import React, { useState } from "react";

const Dropdown = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="container mx-auto p-4">
      <label htmlFor="options" className="block text-sm font-medium text-gray-700">
        Select an Option:
      </label>
      <select
        id="options"
        name="options"
        value={selectedOption}
        onChange={handleChange}
        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      >
        <option value="" disabled>Select an option</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>
      {selectedOption && <p className="mt-2">Selected: {selectedOption}</p>}
    </div>
  );
};

export default Dropdown;
