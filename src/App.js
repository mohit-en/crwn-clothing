import { Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/homepage/HomePage.Components";
import ShopPage from "./pages/shop/shop.component";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={HomePage} />
      <Route exact path="/shop" component={ShopPage} />
    </div>
  );
}

export default App;
