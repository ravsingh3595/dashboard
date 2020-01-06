import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import { FiArrowUp } from "react-icons/fi";

const useStyles = makeStyles(theme => ({
  conatiner: {
    color: "#2E2D2B",
    height: "70px",
    width: "33%",
    backgroundColor: "#F6F6F4",
    display: "flex",
    flexGrow: 1,
    margin: "10px",
    padding: "5px 5px 0px 20px",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      width: "100%"
    }
  },
  titleContainer: {
    display: "flex",
    flexDirection: "column",
    flex: 50
  },
  subTitleContainer: {
    display: "flex",
    flexDirection: "row"
  },
  subTitle: {
    paddingTop: "10px",
    paddingLeft: "5px"
  },
  changeContainer: {
    display: "flex",
    flex: 1,
    flexDirection: "column"
  }
}));

function OverviewCard(props) {
  const classes = useStyles();
  return (
    <div className={classes.conatiner}>
      <div className={classes.titleContainer}>
        <Typography variant="body2">{props.title}</Typography>
        <div className={classes.subTitleContainer}>
          <Typography style={{ fontSize: "32px" }} variant="h4">
            {props.amountChange}
          </Typography>
          <Typography variant="h6" className={classes.subTitle}>
            {props.subTitle}
          </Typography>
        </div>
      </div>
      <div className={classes.changeContainer}>
        <Typography variant="h6">+{props.percentageChange}%</Typography>

        {props.change ? (
          <FiArrowUp size={42} color="#74A04C" />
        ) : (
          <FiArrowUp size={42} color="#D0021A" />
        )}
      </div>
    </div>
  );
}

OverviewCard.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  change: PropTypes.bool.isRequired,
  percentageChange: PropTypes.number.isRequired,
  amountChange: PropTypes.string.isRequired
};

export default OverviewCard;
