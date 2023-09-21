import "./DropDownList.css"
import DropDownItem from "../DropDownItem/DropDownItem"

const DropDownList = ({ options, isMultiSelect, selectedOptions, toggleOption }) => {
  console.log(selectedOptions)
  return (
    <div className="drop-down-list">
      {options.map(value => 
        <DropDownItem key={value} value={value} isMultiSelect={isMultiSelect} toggleOption={toggleOption} isSelected={selectedOptions.has(value)} />  
      )}
    </div>
  )
}

export default DropDownList