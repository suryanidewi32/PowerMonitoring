import FusionCharts from 'fusioncharts';
// Load the charts module
import charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';
import React from 'react';


charts(FusionCharts);

const dataSource = {
    chart: {
        showBorder: "0",
        showCanvasBorder: "0",
        placeValuesInside: "0",
        showAlternateVGridColor: "0",
        canvasBgAlpha: "0",
        bgColor: "#1D1B41",
        bgAlpha: "0",
        baseFont: "Nunito Sans Light",
        baseFontColor: "#000000",
        baseFontSize: "14",
        showDivLineValues: "0",
        divLineAlpha: "0",
        showLimits: "0",
        baseFontBold: "0",
        usePlotGradientColor: "0",
        // numberSuffix: " kWh",
        yAxisMaxValue: "3",
        paletteColors: "#AB26C2, #9326BF, #7625B9, #5E24B6, #4424B1, #3123AE",
        labelFontColor: "#000000",
        labelFontBold: "0",
        labelFontSize: "16",
        plotBorderAlpha: "0",
        plotFillAlpha: "100",
        valueFontBold: "1",
        valueFontColor: "#000000",
        valueFontSize: "13",
        toolTipBgcolor: "back",
        toolTipPadding: "7",
        toolTipBorderRadius: "3",
        toolTipBorderAlpha: "30",
        tooltipBorderThickness: "0.7",
        toolTipColor: "#000000",
        canvasLeftMargin: "0",
        canvasRightMargin: "40",
        canvasBottomMargin: "20",
        canvasTopMargin: "20",
        showHoverEffect: "1"
      },
    
      annotations: {
        groups: [
          {
            items: [
              {
                id: "info",
                type: "text",
                text: "",
                align: "right",
                color: "black",
                font: "Nunito Sans Light",
                fontSize: "15",
                bold: "0",
                x: "$canvasEndX + 30",
                y: "$canvasEndY - 25"
              }
            ]
          }
        ]
      },
    
      data: [
        {
          label: "Watt",
          value: "1.4",
          toolText: "$Label: 31.8%",
          suffix: "A"
        },
        {
          label: "Frequency",
          value: "0.9",
          toolText: "$Label: 20.4%"
        },
        {
          label: "Ampere",
          value: "0.8",
          toolText: "$Label: 18.1%"
        },
        {
          label: "Power Factor",
          value: "0.7",
          toolText: "$Label: 15.9%"
        },
        {
          label: "kVar",
          value: "0.4",
          toolText: "$Label: 9%"
        }
      ]
    };

class ChartEnergyM extends React.Component {
  render() {
    return (
      <ReactFC
        type="bar2d"
        width="1020"
        dataFormat="JSON"
        dataSource={dataSource}
      />
    );
  }
}
export default ChartEnergyM