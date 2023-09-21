import "./DropDown.css";
import DropDownList from "./DropDownList/DropDownList";
import { useState, useEffect } from "react";

const DropDown = ({ multiSelect, options, placeHolder, size, autoScale, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState(new Set());

  const toggleOption = (option) => {
    if (multiSelect) {
      var newSelectedOptions = new Set([...selectedOptions]);
      if (selectedOptions.has(option)) {
        newSelectedOptions.delete(option);
      } else {
        newSelectedOptions.add(option);
      }
      setSelectedOptions(newSelectedOptions);
      onChange(Array.from(newSelectedOptions))
    } else {
      setSelectedOptions(new Set([option]));
      onChange(option)
    }
    if (!multiSelect) {
      setIsOpen(false);
    }
  };

  const getPlaceHolderContent = () => {
    let placeHolderContent;
    if (multiSelect) {
      if (!selectedOptions.size > 0) {
        placeHolderContent = "";
      } else {
        let optionsPlaceHolder = "";
        for (const value of selectedOptions) {
          optionsPlaceHolder += value + ", ";
        }
        placeHolderContent = optionsPlaceHolder.slice(0, -2);
      }
      return placeHolderContent;
    } else {
      placeHolderContent = selectedOptions;
      return placeHolderContent
    }
  };

  return (
    <div className={`drop-down ${isOpen ? "open" : "closed"} ${size} ${autoScale ? "auto-scale" : ""}`}>
      <div className="placeholder-wrapper" onClick={() => setIsOpen(!isOpen)}>
      <span className={`test ${(!selectedOptions?.size > 0 && !isOpen) ? "bottom" : "top"}`}>{placeHolder}</span>
        <span className="placeholder">{getPlaceHolderContent()}</span>
        <div className={`arrow ${isOpen ? "up" : "down"}`}></div>
      </div>
      {isOpen && (
        <DropDownList
          options={options}
          isMultiSelect={multiSelect}
          toggleOption={toggleOption}
          selectedOptions={selectedOptions}
        />
      )}
    </div>
  );
};

export default DropDown;
