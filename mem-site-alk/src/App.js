import Grid from "@material-ui/core/Grid";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { HotView } from "Views/HotView";
import { RegularView } from "Views/RegularView";
import { MenuComponent } from "Components/MenuComponent";
import { StarView } from "Views/StarView";

function App() {

  return (
    <div className={"root"}>
      <Router>
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <MenuComponent />
          </Grid>

          <Grid item xs className={"scrollableGrid"}>
            <Switch>
              <Route path={["/", "/regular"]} exact={true}>
                <RegularView />
              </Route>
              <Route path="/hot" exact={true}>
                <HotView />
              </Route>
              <Route path="/star" exact={true}>
                <StarView />
              </Route>
              <Route path="*">
                <div>Uuups! Page Not Found! :(</div>
              </Route>
            </Switch>
          </Grid>
        </Grid>
      </Router>
    </div>
  );
}

export default App;
