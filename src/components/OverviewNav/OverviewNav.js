import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Icon from "../../assests/icon.png";
import { Typography } from "@material-ui/core";
import { GiMeshNetwork } from "react-icons/gi";
import { FiFilter } from "react-icons/fi";
import { TiArrowForwardOutline } from "react-icons/ti";
import { FaRegCalendarAlt } from "react-icons/fa";

const useStyles = makeStyles(theme => ({
  conatiner: {
    display: "flex",
    flexDirection: "row"
  },
  circleIcon: {
    paddingLeft: "20px"
  },
  title: {
    flex: 10,
    paddingTop: "15px",
    color: "#3A3F3E"
  },
  subContent: {
    padding: "15px 20px",
    display: "flex",
    flexDirection: "row"
  },
  icon: {
    paddingRight: "5px"
  }
}));

export default function OverviewNav() {
  const classes = useStyles();
  return (
    <div className={classes.conatiner}>
      <div className={classes.circleIcon}>
        <img src={Icon} alt="icon" height="50px" width="50px" />
      </div>
      <div className={classes.title}>
        <Typography
          style={{ fontWeight: "600", paddingLeft: "10px" }}
          variant="subtitle1"
        >
          Video streaming overview
        </Typography>
      </div>
      <div className={classes.subContent} style={{ marginTop: "4px" }}>
        <GiMeshNetwork className={classes.icon} size={24} />
        <Typography style={{ fontSize: "12px" }}>Network: Mobile</Typography>
      </div>
      <div className={classes.subContent} style={{ marginTop: "4px" }}>
        <FiFilter className={classes.icon} size={20} />
        <Typography style={{ fontSize: "12px" }}>Filter</Typography>
      </div>
      <div className={classes.subContent}>
        <TiArrowForwardOutline className={classes.icon} size={26} />
        <Typography style={{ marginTop: "3px", fontSize: "12px" }}>
          Share
        </Typography>
      </div>
      <div className={classes.subContent} style={{ marginTop: "4px" }}>
        <FaRegCalendarAlt className={classes.icon} size={20} />
        <Typography style={{ fontSize: "12px" }}>last 24 hours</Typography>
      </div>
    </div>
  );
}
