import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { NavLink, useLocation } from "react-router-dom";
import { ROUTES } from "routes/routes";

export const MenuComponent = () => {
  const location = useLocation();
  const { pathname } = location;

  const isHotActive = pathname === ROUTES.hot;
  const isRegularActive = pathname === ROUTES.regular;
  const isStarActive = pathname === ROUTES.star;

  return (
    <>
      <Grid item xs>
        <Button
          className="navlink"
          color={isRegularActive ? "secondary" : "primary"}
          size="large"
          component={NavLink}
          to={ROUTES.regular}
        >
          Regular
        </Button>
      </Grid>
      <Grid item xs>
        <Button
          className="navlink"
          color={isHotActive ? "secondary" : "primary"}
          size="large"
          component={NavLink}
          to={ROUTES.hot}
        >
          Hot
        </Button>
      </Grid>
      <Grid item xs>
        <Button
          className="navlink"
          color={isStarActive ? "secondary" : "primary"}
          size="large"
          component={NavLink}
          to={ROUTES.star}
        >
          Starred
        </Button>
      </Grid>
    </>
  );
};
