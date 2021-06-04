import "App.css";
import { BrowserRouter as Router, NavLink, Route, Switch } from "react-router-dom";
import { HotView } from "Views/HotView";
import { RegularView } from "Views/RegularView";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="NavBar">
          <NavLink className="NavItem" to="/hot">
            Hot
          </NavLink>
          <NavLink className="NavItem" to="/regular">
            Regular
          </NavLink>
        </div>
        <div className="Content">
          <Switch>
            <Route path="/" exact={true}>
              <p>HomePage</p>
            </Route>
            <Route path="/hot">
              <HotView />
            </Route>
            <Route path="/regular">
              <RegularView />
            </Route>
            <Route path="*">
              <div>Uuups! Page Not Found! :(</div>
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
