import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { FiMenu, FiBell, FiHelpCircle, FiSettings } from "react-icons/fi";
import Badge from "@material-ui/core/Badge";
import NavImage from "../../assests/NavImage.jpg";

const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1,
    backgroundColor: "black"
  },
  title: {
    [theme.breakpoints.up("sm")]: {
      display: "block",
      fontFamily: "Helvetica Neue, arial, sans-serif !important",
      fontWeight: "300"
    }
  },
  subtitle: {
    paddingLeft: "30px",
    paddingTop: "15px"
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex"
    }
  }
}));

export default function NavBar() {
  const classes = useStyles();

  return (
    <div className={classes.grow}>
      <AppBar
        position="static"
        style={{
          backgroundImage: "url(" + NavImage + ")",
          height: "70px",
          width: "100%",
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%"
        }}
      >
        <Toolbar>
          <img
            src="https://www.sandvine.com/hs-fs/hubfs/footer_logo.png?width=670&name=footer_logo.png"
            alt="logo"
            width="180px"
            height="30px"
          />
          <Typography className={classes.subtitle} variant="caption" noWrap>
            Video Streaming Management
          </Typography>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <IconButton aria-label="show 14 new notifications" color="inherit">
              <Badge
                badgeContent={14}
                color="secondary"
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              >
                <FiBell />
              </Badge>
            </IconButton>
            <IconButton color="inherit">
              <FiSettings />
            </IconButton>
            <IconButton color="inherit">
              <FiHelpCircle />
            </IconButton>
            <IconButton color="inherit">
              <FiMenu />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
