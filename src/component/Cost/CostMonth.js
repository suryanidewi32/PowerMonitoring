import FusionCharts from 'fusioncharts';
import Widgets from 'fusioncharts/fusioncharts.widgets';
import ReactFC from 'react-fusioncharts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
import React from 'react';

ReactFC.fcRoot(FusionCharts, Widgets, FusionTheme);

const dataSource = {

  chart: {
    showBorder: "0",
    showCanvasBorder: "0",
    showAlternateHGridColor: "0",
    bgColor: "#1D1B41",
    bgAlpha: "0",
    canvasBgAlpha: "0",
    baseFontSize: "13",
    baseFont: "Nunito Sans Light",
    baseFontColor: "#000000",
    divLineThickness: "2",
    showValues: "0",
    showLegend: "0",
    toolTipBgcolor: "#484E69",
    toolTipPadding: "7",
    toolTipBorderRadius: "3",
    toolTipBorderAlpha: "30",
    tooltipBorderThickness: "0.7",
    toolTipColor: "#000000",
    paletteColors: "#FA394E, #4B53FF",
    usePlotGradientColor: "0",
    yAxisMinValue: "0",
    yAxisMaxValue: "10",
    plotFillAlpha: "100",
    drawAnchors: "1",
    anchorBgColor: "#FA394E",
    anchorBorderColor: "black",
    anchorRadius: "5",
    anchorBorderThickness: "1.9",
    showPlotBorder: "0",
    showToolTip: "1",
    canvasTopMargin: "75",
    canvasBottomMargin: "75",
    canvasLeftMargin: "30",
    canvasRightMargin: "30",
    labelDisplay: "ROTATE",
    numberSuffix: " kWh",
    transposeAnimation: "1"
    },


    annotations: {
        groups: [
          {
            items: [

              {
                id: "2",
                type: "text",
                text: "Till Now:",
                align: "left",
                font: "Nunito Sans",
                bold: "0",
                fontSize: "12.5",
                color: "black",
                x: "$canvasStartX - 20",
                y: "$canvasStartY - 35"
              },
              {
                id: "3",
                type: "text",
                text: 137.7 + " kWh",
                align: "left",
                font: "Nunito Sans",
                bold: "1",
                fontSize: "13",
                color: "black",
                x: "$canvasStartX + 30",
                y: "$canvasStartY - 35"
              },
              {
                id: "4",
                type: "text",
                text: "Predicted:",
                align: "left",
                font: "Nunito Sans",
                bold: "0",
                fontSize: "12.5",
                color: "black",
                x: "$canvasEndX - 116",
                y: "$canvasStartY - 35"
              },
              {
                id: "5",
                type: "text",
                text: 31 + " kWh",
                align: "left",
                font: "Nunito Sans",
                bold: "1",
                fontSize: "13",
                color: "black",
                x: "$canvasEndX - 60",
                y: "$canvasStartY - 35"
              }
            ]
          }
        ]
      },
    
      categories: [
        {
            "category": [{
                "label": "Aug 20"
            },
            {
                "label": "Aug 21"
            },
            {
                "label": "Aug 22"
            },
            {
                "label": "Aug 23"
            },
            {
                "label": "Aug 24"
            }
        ]
        }
      ],
    
      dataset: [
        {
        "seriesname": null,
        "data": [{
                "value": "2.5"
            },
            {
                "value": "2.5"
            },
            {
                "value": "10.5"
            },
            {
                "value": "8.5"
            },
            {
                "value": "15.0"
            }
        ]
    },
      ]
    };
    

class ChartConsumptionM extends React.Component {
  render() {
    return (
        <ReactFC
        type="msarea"
        width="100%"
        hight="500px"
        dataFormat="JSON"
        dataSource={dataSource}
      />
    );
  }
}

export default ChartConsumptionM