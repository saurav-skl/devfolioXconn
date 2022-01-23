import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    width: "100%",
    position: "fixed",
    bottom: 0,
    backgroundColor: "#2d313a",
    zIndex: 100,
  },
});

const Mainnav = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  return (
    <div>
      <BottomNavigation showLabels className={classes.root}>
        <BottomNavigationAction
          style={{ color: "white" }}
          label="Home"
          icon={<HomeIcon />}
          onClick={() => navigate("/home")}
        />
        <BottomNavigationAction
          style={{ color: "white" }}
          label="Search"
          icon={<SearchIcon />}
          onClick={() => navigate("/search")}
        />
      </BottomNavigation>
    </div>
  );
};

export default Mainnav;
