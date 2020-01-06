import React, { Component } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  PieChart,
  Pie,
  Cell,
  Label
} from "recharts";
import {
  barChartData,
  pieChartData,
  pieChartColor
} from "../../utils/BarchartData";
import CoverChartLegent from "../CoverageChartLegend";
import { Typography } from "@material-ui/core";

class BarChartDataVisualization extends Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          border: "1px solid #EEEEEE",
          height: "350px"
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Typography
            style={{
              padding: "12px",
              fontWeight: "bold",
              fontSize: "12px",
              color: "black"
            }}
          >
            Location traffic by time of day
          </Typography>
          <BarChart
            width={450}
            height={300}
            data={barChartData}
            margin={{
              top: 20,
              right: 30,
              left: 5,
              bottom: 5
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              axisLine={false}
              tickLine={false}
              dataKey="Volume (GB)"
              tickCount={3}
              minTickGap={1}
              ticks={["12AM", "12PM", "11PM"]}
            ></XAxis>
            <YAxis
              label={{
                value: "Volume (GB)",
                angle: "-90",
                position: "left"
              }}
              axisLine={false}
              tickLine={false}
              tickCount={7}
            />
            <Tooltip />
            <Legend />
            <Bar dataKey="Time of Day" fill="#935B92" barSize={10}></Bar>
          </BarChart>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Typography
            style={{
              padding: "12px",
              fontWeight: "bold",
              fontSize: "12px",
              color: "black"
            }}
          >
            Top devices
          </Typography>
          <PieChart width={300} height={275}>
            <Pie
              data={pieChartData}
              cx={120}
              cy={120}
              innerRadius={70}
              outerRadius={120}
              fill="#8884d8"
              dataKey="value"
            >
              <Label
                style={{ fontWeight: "700" }}
                value="iPhone 11"
                position="center"
              />
              {pieChartData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={pieChartColor[index % pieChartColor.length]}
                />
              ))}
            </Pie>
          </PieChart>
          <Typography
            style={{
              paddingLeft: "20%",
              fontSize: "12px",
              color: "black"
            }}
          >
            Traffic share by % volume
          </Typography>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "center",
            fontSize: "12px"
          }}
        >
          {pieChartData.map(data => (
            <CoverChartLegent
              key={data.name}
              colour={data.color}
              content={data.name}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default BarChartDataVisualization;
