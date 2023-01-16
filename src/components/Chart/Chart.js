import React from "react";

import ChartBar from "./ChartBar";
import './Chart.css';

const Chart = (props) => {
    // 월:비용 객체가 담긴 배열에서 객체 하나하나에 접근하여 value값만 빼온다. 새로운 배열로 반환된다. 
    const dataPointValues = props.dataPoints.map((dataPoint => dataPoint.value));
    // 비용 중에 가장 큰 값을 찾는다. 
    const totalMaximum = Math.max(...dataPointValues);

    return (
        <div className="chart">
            {props.dataPoints.map((dataPoint) =>
                <ChartBar
                    key={dataPoint.label}
                    value={dataPoint.value}
                    maxValue={totalMaximum}
                    label={dataPoint.label} />
            )}
        </div>
    );
};

export default Chart;