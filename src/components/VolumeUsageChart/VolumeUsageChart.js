import React from "react";
import { Typography } from "@material-ui/core";
import { volumeUsageChart } from "../../utils/BarchartData";
import { makeStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles(theme => ({
  conatiner: {
    display: "flex",
    flexDirection: "column",
    border: "1px solid #EEEEEE",
    height: "350px",
    overflow: "scroll"
  },
  wrapper: {
    display: "flex",
    flexDirection: "row",
    padding: "5px 15px"
  },
  name: {
    width: "120px",
    fontSize: "11px"
  },
  value: {
    fontSize: "11px"
  }
}));

export default function VolumeUsageChart() {
  const classes = useStyles();
  return (
    <div className={classes.conatiner}>
      <Typography
        style={{
          padding: "12px",
          fontWeight: "bold",
          fontSize: "12px",
          color: "black"
        }}
      >
        Top services by volume
      </Typography>
      {volumeUsageChart.map(data => (
        <>
          <div className={classes.wrapper}>
            <div className={classes.name}>{data.name}</div>

            <div
              style={{
                marginTop: "5px",
                marginRight: "20px",
                height: "12px",
                width: `${data.value / 5}px`,
                backgroundColor: data.color
              }}
            />
            <div className={classes.value}>{data.value}GB</div>
          </div>
          <Divider variant="middle" />
        </>
      ))}
    </div>
  );
}
