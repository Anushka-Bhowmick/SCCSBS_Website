import logo from "./logo.svg";

import bootstrap from "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Route, Link, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Homescreen from "./screens/Homescreen";
import Registerscreen from "./screens/Registerscreen";
import Loginscreen from "./screens/Loginscreen";
function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Route>
          
          <Route path="/register" exact component={Registerscreen} />
          <Route path="/login" exact component={Loginscreen} />
          <Route path="/" exact component={Homescreen} />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
