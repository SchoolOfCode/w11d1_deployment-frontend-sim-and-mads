import logo from "../../logo.svg";
import "./App.css";
import Form from "../Form/Form.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>This is our app we are adding a form huehuehue</p>
        <Form />
      </header>
    </div>
  );
}

export default App;
