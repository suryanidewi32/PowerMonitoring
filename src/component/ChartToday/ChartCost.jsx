import React from 'react';
import Chart from 'react-apexcharts';
import axios from 'axios';


const ChartCost = () =>{
const options = {
series: [3000000,2000000],
labels: ["Apple", "Banana"],
plotOptions: {
pie: {
expandOnClick: false,
donut: {
size: "55px",
labels: {
show: true,
total: {
show: true,
showAlways: true,
fontSize: "24px",
color: "#2787AB"
}
}
}
}
}
};

const series = [3000000,2000000];

return (
    <Chart options={options} series={series} type="donut" width="500" />
);

};
export default ChartCost




// // export default ChartCost;
// import FusionCharts from 'fusioncharts';
// // Load the charts module
// import charts from 'fusioncharts/fusioncharts.charts';
// import ReactFC from 'react-fusioncharts';
// import React from 'react';


// charts(FusionCharts);

// const dataSource = {
//   "chart": {

//     "use3DLighting": "0",
//     "showLabels": "0",
//     "showValues": "0",
//     "paletteColors": "#58E2C2, #F7E53B",
//     "doughnutRadius": "85",
//     "pieRadius": "100",
//     "numberPrefix": "Rp.",
//     "plotBorderAlpha": "0",
//     "toolTipPadding": "7",
//     "toolTipBorderRadius": "",
//     "toolTipBorderAlpha": "30",
//     "tooltipBorderThickness": "0.7",
//     "baseFont": "Nunito Sans",
//     "baseFontSize": "14",
//     "showLegend": "1",
//     "legendShadow": "0",
//     "legendBorderAlpha": "0",
//     "drawCustomLegendIcon": "1",
//     "legendBgAlpha": "0",
//     "chartTopMargin": "5",
//     "chartLeftMargin" :"60",
//     "canvasTopMargin": "-10",
//     "chartBottomMargin": "20",
//     "canvasBottomMargin": "20",
//     "legendNumColumns": "1",
//     "legendPosition": "RIGHT",
//     "legendFontSize":"19",
//     "defaultCenterLabel": "Total <br> Rp. 1.088.280 ",
//     "color": "black",
//     "centerLabel": "$label<br>$value",
//     "centerLabelBold": "2",
//     "centerLabelFontSize": "19",
//     "enableRotation": "0",
  
//     "plotToolText": "<div>$label<br>$dataValue ($percentValue)<div>"
//   },

//   "annotations": {
//     "groups": [{
//         "autoscale": "1",
//         "items": [{
//             "id": "indicator",
//             "type": "text",
//             "text": "",
//             "color": "black",
//             "baseFont": "Nunito Sans Regular",
//             "fontSize": "14",
//             "x": "$canvasEndX + 1",
//             "y": "$canvasheight/2 - 15"
//         }]
//     }]
//   },
//   data: [
//     {
//       label: "Electricity",
//       value: "139"
//     },
//     {
//       label: "Solar Panel",
//       value: "75"
//     }
//   ]
// };

// class ChartCost extends React.Component {
//   render() {
//     return (
//       <ReactFC
//         type="doughnut2d"
//         width="100%"
//         dataFormat="JSON"
//         dataSource={dataSource}
//       />
//     );
//   }
// }
// export default ChartCost