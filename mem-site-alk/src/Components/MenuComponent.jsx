import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { NavLink, useLocation } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: "20px",
    width: "90%",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  scroll: {
    overflow: "auto",
    maxHeight: "400px",
  },
  navLink: {
    width: "100%",
  },
}));

export const MenuComponent = () => {
  const location = useLocation();
  const classes = useStyles();

  const isHotActive = location.pathname === "/hot";
  const isRegularActive = ["/", "/regular"].includes(location.pathname);
  const isStarActive = location.pathname === "/star";
  return (
    <>
      <Grid item xs>
        <Button
          className={classes.navLink}
          color={isRegularActive ? "secondary" : "primary"}
          size="large" 
          component={NavLink}
          to={"/regular"}
        >
          Regular
        </Button>
      </Grid>
      <Grid item xs>
        <Button
          className={classes.navLink}
          color={isHotActive ? "secondary" : "primary"}
          size="large" 
          component={NavLink}
          to={"/hot"}
        >
          Hot
        </Button>
      </Grid>
      <Grid item xs>
        <Button
          className={classes.navLink}
          color={isStarActive ? "secondary" : "primary" }
          size="large" 
          component={NavLink}
          to={"/star"}
        >
          Starred
        </Button>
      </Grid>
    </>
  );
};
