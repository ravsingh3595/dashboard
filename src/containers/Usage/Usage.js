import React, { Component } from "react";
import OverviewCard from "../../components/OverviewCard";
import OverviewNav from "../../components/OverviewNav";
import MapDataVisualization from "../../components/MapDataVisualization";
import BarChartDataVisualization from "../../components/BarChartDataVisualization";
import VolumeUsageChart from "../../components/VolumeUsageChart";

class Usage extends Component {
  render() {
    return (
      <div style={{ paddingTop: "40px" }}>
        <OverviewNav />
        <div style={{ display: "flex", flexGrow: 1 }}>
          <OverviewCard
            title="Subscriber count"
            subTitle="in last hour"
            change={false}
            percentageChange={36}
            amountChange="214,000"
          />
          <OverviewCard
            title="Video volume"
            subTitle="GB in the last hour"
            change={false}
            percentageChange={36}
            amountChange="768"
          />
          <OverviewCard
            title="Volume saved"
            subTitle="GB savings"
            change={true}
            percentageChange={6}
            amountChange="297"
          />
        </div>
        <div>
          <MapDataVisualization />
        </div>
        <div style={{ display: "flex", flexDirection: "row", padding: "5px" }}>
          <div style={{ flex: 3, paddingRight: "10px" }}>
            <BarChartDataVisualization />
          </div>
          <div style={{ flex: 1 }}>
            <VolumeUsageChart />
          </div>
        </div>
      </div>
    );
  }
}
export default Usage;
