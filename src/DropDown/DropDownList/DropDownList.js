import "./DropDownList.css";
import DropDownItem from "../DropDownItem/DropDownItem";

const DropDownList = ({
  options,
  isMultiSelect,
  selectedKeys,
  toggleOption,
  width,
}) => {
  return (
    <div className="drop-down-list" style={{ width: width }}>
      {isMultiSelect && (
        <DropDownItem
          optionKey="all"
          optionValue="All"
          toggleOption={toggleOption}
          italic
        />
      )}
      <DropDownItem
        optionKey="none"
        optionValue="None"
        toggleOption={toggleOption}
        italic
      />
      {options.map((option) => (
        <DropDownItem
          key={option.key}
          optionKey={option.key}
          optionValue={option.value}
          isMultiSelect={isMultiSelect}
          toggleOption={toggleOption}
          isSelected={selectedKeys.has(option.key)}
        />
      ))}
    </div>
  );
};

export default DropDownList;
