import Register from "./components/Register";
import ipConfig from "./ipConfig.json";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import Products from "./components/Products";
import Checkout from "./components/Checkout"
import Thanks from "./components/Thanks"

// export const config = {
//   endpoint: `https://yashnawgiri45-me-qkart-backend-1.onrender.com`,
// };
export const config = {
  endpoint: `http://${ipConfig.workspaceIp}:8082/api/v1`,
};

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Checkout />
          </Route>
          <Route path = "/thanks">
            <Thanks/>
          </Route>
          <Route path="/">
            <Products />
          </Route>
        
        </Switch>
      </Router>
    </div>
  );
}

export default App;
