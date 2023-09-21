import logo from "./logo.svg";
import "./App.css";
import DropDown from "./DropDown/DropDown";

function App() {

  const handleChange = (selectedOptions) => {
    console.log(selectedOptions)
  }
  return (
    <div className="App">
      <div className="container">
        <p>Select on option</p>
        <DropDown
          placeHolder="Age"
          onChange={handleChange}
          size="lg"
          multiSelect
          options={[
            "Hello There",
            "World",
            "My name",
            "Christopher Hawkings",
            "Nolan",
            "Christine Na",
          ]}
          autoScale
        />
        <p>This is another item</p>
      </div>
    </div>
  );
}

export default App;
