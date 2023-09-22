import "./DropDownItem.css";

const DropDownItem = ({
  optionKey,
  optionValue,
  isMultiSelect,
  toggleOption,
  isSelected,
  italic,
}) => {
  return (
    <div
      className={`drop-down-item ${isSelected ? "selected" : ""} ${
        italic ? "italic" : ""
      }`}
      onClick={() => toggleOption(optionKey)}
    >
      {isMultiSelect && (
        <input
          onClick={() => toggleOption(optionKey)}
          type="checkbox"
          readOnly
          checked={isSelected}
        ></input>
      )}
      <span>{optionValue}</span>
    </div>
  );
};

export default DropDownItem;
