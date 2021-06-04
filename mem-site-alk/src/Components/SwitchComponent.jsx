import { Switch, Route } from "react-router-dom";
import { RegularView } from "Views/RegularView";
import { HotView } from "Views/HotView";

export const SwitchComponent = () => {
  return (
    <>
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
    </>
  );
};
