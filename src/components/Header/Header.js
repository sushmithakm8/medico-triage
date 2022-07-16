import React from "react";
import { AppBar, makeStyles, Toolbar, Typography } from "@material-ui/core";
import "./Header.module.css";
import {
  LocalHospitalOutlined,
  LocalHospitalRounded,
} from "@material-ui/icons";
const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));
const Header = () => {
  const classes = useStyles();

  return (
    <AppBar>
      <Toolbar>
        <LocalHospitalRounded className={classes.icon} />
        <Typography variant="h6" className={classes.title}>
          SmartTriage
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

Header.propTypes = {};

Header.defaultProps = {};

export default Header;
