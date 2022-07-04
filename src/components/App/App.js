import logo from "../../logo.svg";
import "./App.css";
import Form from "../Form/Form.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload. This is an edit to
          the app tee hee hee. This is a second edit to check the OG repo is
          working.
        </p>
        <Form />
      </header>
    </div>
  );
}

export default App;
