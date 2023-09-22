import "./DropDownBox.css";

const DropDownBox = ({
  isOpen,
  setIsOpen,
  selectedValues,
  placeHolder,
  multiSelect,
  width,
}) => {
  const getPlaceHolderContent = () => {
    let placeHolderContent;
    if (multiSelect) {
      if (!selectedValues.length > 0) {
        placeHolderContent = "";
      } else {
        let optionsPlaceHolder = "";
        for (const value of selectedValues) {
          optionsPlaceHolder += value + ", ";
        }
        placeHolderContent = optionsPlaceHolder.slice(0, -2);
      }
      return placeHolderContent;
    } else {
      placeHolderContent = selectedValues;
      return placeHolderContent;
    }
  };

  return (
    <div
      className="drop-down-box"
      onClick={() => setIsOpen(!isOpen)}
      style={{ width: width }}
    >
      <span
        className={`placeholder ${
          !selectedValues?.length > 0 && !isOpen ? "bottom" : "top"
        }`}
      >
        {placeHolder}
      </span>
      <span className="selected-values-indicator">
        {getPlaceHolderContent()}
      </span>
      <div className={`arrow ${isOpen ? "up" : "down"}`}></div>
    </div>
  );
};

export default DropDownBox;
