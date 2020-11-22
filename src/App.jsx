import { Switch, Route } from "react-router-dom";
import HomePage from "./components/home_components/home_page";
import Mart from "./components/mart_components/mart_landing";
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/auth" component={HomePage} />
        <Route path="/" component={Mart} />
      </Switch>
    </div>
  );
}

export default App;
