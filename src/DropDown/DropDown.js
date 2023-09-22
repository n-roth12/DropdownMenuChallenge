import "./DropDown.css";
import DropDownBox from "./DropDownBox/DropDownBox";
import DropDownList from "./DropDownList/DropDownList";
import { useState, useRef } from "react";
import useDetectOutsideClick from "./utils/useDetectOutsideClick";

const DropDown = ({
  multiSelect,
  options,
  placeHolder,
  onChange,
  width,
  autoWidth,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedKeys, setSelectedKeys] = useState(new Set());
  const dropDownRef = useRef(null);
  useDetectOutsideClick(dropDownRef, () => setIsOpen(false));

  const toggleOption = (key) => {
    var newSelectedKeys;
    if (key === "none") {
      newSelectedKeys = new Set();
    } else if (key === "all") {
      newSelectedKeys = new Set([...options.map((option) => option.key)]);
    } else if (multiSelect) {
      newSelectedKeys = new Set([...selectedKeys]);
      if (selectedKeys.has(key)) {
        newSelectedKeys.delete(key);
      } else {
        newSelectedKeys.add(key);
      }
    } else {
      newSelectedKeys = new Set([key]);
    }
    if (!multiSelect) {
      onChange(options.find((option) => option.key === key));
      setIsOpen(false);
    } else {
      onChange(options.filter((option) => newSelectedKeys.has(option.key)));
    }
    setSelectedKeys(newSelectedKeys);
  };

  const getSelectedValues = (_options) => {
    var result = _options
      .filter((option) => {
        return selectedKeys.has(option.key);
      })
      .map((filteredOption) => filteredOption.value);
    return result;
  };

  return (
    <div
      ref={dropDownRef}
      className={`drop-down ${isOpen ? "open" : "closed"} ${
        autoWidth ? "auto-width" : ""
      }`}
    >
      <DropDownBox
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        selectedValues={getSelectedValues(options)}
        placeHolder={placeHolder}
        multiSelect={multiSelect}
        width={width}
      />
      {isOpen && (
        <DropDownList
          options={options}
          isMultiSelect={multiSelect}
          toggleOption={toggleOption}
          selectedKeys={selectedKeys}
          width={width}
        />
      )}
    </div>
  );
};

export default DropDown;
