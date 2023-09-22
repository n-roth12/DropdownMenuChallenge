import "./App.css";
import DropDown from "./DropDown/DropDown";
import { useState } from "react";

function App() {
  const [selectedNames, setSelectedNames] = useState([]);
  const [selectedNumber, setSelectedNumber] = useState();

  const handleChangeName = (values) => {
    setSelectedNames(values);
  };
  const handleChangeNumber = (number) => {
    setSelectedNumber(number);
  };
  var multiSelectOptions = [
    {
      value: "Oliver Hansen",
      key: "Oliver Hansen",
    },
    {
      value: "Van Henry",
      key: "Van Henry",
    },
    {
      value: "April Tucker",
      key: "April Tucker",
    },
    {
      value: "Ralph Hubbard",
      key: "Ralph Hubbard",
    },
    {
      value: "Nolan Roth",
      key: "Nolan Roth",
    },
    {
      value: "Omar Alexander",
      key: "Omar Alexander",
    },
    {
      value: "Carlos Abbott",
      key: "Carlos Abbot",
    },
  ];
  var singleSelectOptions = [
    {
      value: 23,
      key: 23,
    },
    {
      value: 12,
      key: 12,
    },
    {
      value: 88888888,
      key: 88888888,
    },
    {
      value: 10000000000,
      key: 10000000000,
    },
    {
      value: 97,
      key: 97,
    },
    {
      value: 99,
      key: 99,
    },
    {
      value: 55,
      key: 55,
    },
  ];
  return (
    <div className="App">
      <div className="container">
        <h1>Demo</h1>
        <p>Here is a multi select element with custom width: </p>

        <DropDown
          placeHolder="Name"
          onChange={handleChangeName}
          multiSelect
          options={multiSelectOptions}
          width="400px"
        />
        
        <p>Here is a single select element with auto width: </p>

        <DropDown
          placeHolder="Number"
          onChange={handleChangeNumber}
          options={singleSelectOptions}
          autoWidth
        />

        {selectedNames.length > 0 && (
          <>
            <h3>Selected Names:</h3>
            <ul>
              {selectedNames.map((name) => (
                <li>{name.value}</li>
              ))}
            </ul>
          </>
        )}
        {selectedNumber && (
          <>
            <h3>Selected Number: </h3>
            <span>{selectedNumber.value}</span>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
