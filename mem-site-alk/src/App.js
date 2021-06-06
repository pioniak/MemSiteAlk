import Grid from "@material-ui/core/Grid";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import { HotView } from "views/HotView";
import { RegularView } from "views/RegularView";
import { MenuComponent } from "components/MenuComponent";
import { StarView } from "views/StarView";
import { ROUTES } from "routes/routes";
import { useRef } from "react";

function App() {
  const memContainerRef = useRef();

  const scrollToTop = () =>{
    memContainerRef.current.scroll({top: 0, behavior: 'smooth'});
  }

  return (
    <div className={"root"}>
      <Router>
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <MenuComponent />
          </Grid>

          <Grid ref={memContainerRef} item xs className={"scrollableGrid"}>
            <Switch>
              <Route path={ROUTES.root} exact>
                <Redirect to={ROUTES.regular} />
              </Route>
              <Route path={ROUTES.regular} exact>
                <RegularView scrollTop={scrollToTop}/>
              </Route>
              <Route path={ROUTES.hot} exact>
                <HotView scrollTop={scrollToTop}/>
              </Route>
              <Route path={ROUTES.star} exact>
                <StarView scrollTop={scrollToTop} />
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
