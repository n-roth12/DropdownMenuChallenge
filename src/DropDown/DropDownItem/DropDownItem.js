import "./DropDownItem.css"

const DropDownItem = ({ value, isMultiSelect, toggleOption, isSelected }) => {

    const preventCheck = (e) => {
        e.stopPropagation()
    }
  return (
    <div className={`drop-down-item ${isSelected ? "selected" : ""}`} onClick={() => toggleOption(value)}>
        {isMultiSelect && <input onClick={() => toggleOption(value)} type="checkbox" readOnly checked={isSelected}></input>}
        <span>{value}</span>
    </div>
  )
}

export default DropDownItem