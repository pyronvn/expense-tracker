import "./Chart.css";
import Chartbar from "./Chartbar";

export default function Chart(props) {
  const dataPointValue = props.dataPoints.map((datapoint) => datapoint.value);
  const totalMzximum = Math.max(...dataPointValue);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => {
        return (
          <Chartbar
            key={dataPoint.label}
            value={dataPoint.value}
            maxValue={totalMzximum}
            label={dataPoint.label}
          />
        );
      })}
    </div>
  );
}
