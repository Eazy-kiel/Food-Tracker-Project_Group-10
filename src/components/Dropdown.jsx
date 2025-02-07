
import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

const DropdownInput = () => {
  const [inputValue, setInputValue] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const options = ["Fruit", "Vegetables", "Medicine", "Bakery", "Beauty Products", "Drinks"]

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    setIsOpen(true); // Show dropdown when typing
  };

  const handleOptionClick = (option) => {
    setInputValue(option);
    setIsOpen(false); // Hide dropdown after selecting
  };

  return (
    <div className="relative w-64">
      {/* Input Field with Icon */}
      <div className="relative">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Select a fruit..."
          className="w-full border border-gray-300 rounded-md px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {/* Dropdown Icon */}
        <ChevronDownIcon
          className={`w-5 h-5 text-gray-500 absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer ${
            isOpen ? "rotate-180" : ""
          }`}
          onClick={() => setIsOpen(!isOpen)}
        />
      </div>

      {/* Dropdown Menu */}
      {isOpen && (
        <ul className="absolute w-full bg-white border border-gray-300 rounded-md mt-1 shadow-lg z-10">
          {options
            .filter((option) =>
              option.toLowerCase().includes(inputValue.toLowerCase())
            )
            .map((option, index) => (
              <li
                key={index}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => handleOptionClick(option)}
              >
                {option}
              </li>
            ))}
        </ul>
      )}
    </div>
  );
};

export default DropdownInput;