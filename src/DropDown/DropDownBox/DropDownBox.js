const DropDownBox = ({ selectedOptions, placeHolder }) => {

  const getPlaceHolderContent = () => {
    let placeHolderContent;
    if (!selectedOptions.size > 0) {
      placeHolderContent = placeHolder;
    } else {
      let optionsPlaceHolder = "";
      for (const value of selectedOptions) {
        optionsPlaceHolder += value + ", ";
      }
      placeHolderContent = optionsPlaceHolder;
    }
    return placeHolderContent;
  };

  return <div className="drop-down-box">
    <span>{getPlaceHolderContent()}</span>
  </div>;
};

export default DropDownBox;
