import { Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/homepage/HomePage.Components";

const HatsPage = (props) => (
  <div>
    {/* {console.log(props)} */}
    <h1>Hats</h1>
    {/* {props.match.params.id ? console.log(props) : console.log("Nothing")} */}
  </div>
);

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={HomePage} />
      <Route exact path="/hats" component={HatsPage} />
      <Route exact path="/hats/:id" component={HatsPage} />
    </div>
  );
}

export default App;
