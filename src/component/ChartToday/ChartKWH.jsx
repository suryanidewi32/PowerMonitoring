import axios from 'axios';
import React, {Component} from 'react'
import Chart from 'react-apexcharts'

export default class ChartKwh extends Component {
    constructor(props) {
    super(props);

      this.state = {
      options: {
      chart: {
      id : 'apexchart-example'
      },

      xaxis: {
      categories: []
      },

      fill: {
      colors: ['#FFF', '#E91E63', '#9C2780']
      },

      plotOptopns: {
      bar: {
      horizontal: false,
      dataLabels: {
      position: 'bottom'
      }
      }
      },

      legend: {
      labels: {
      colors: '#E91E63',
      useSeriesColors: false
      },

      markers: {
      width: 12,
      height: 12,
      strokeWidth: 0,
      strokeColor: '#fff',
      fillColors: undefined,
      radius: 12,
      customHTML: undefined,
      onClick: undefined,
      offsetX: 0,
      offsetY: 0
      },
      }
      },

      series: [
      {
      name: 'KWH',
      data: [],
      },
      ]
      }
      }

      async componentDidMount(){
        const time=[];
        const kwh=[];
        // const location=[];
          await axios.get('http://localhost:3002/kwhreal')
          .then(Response=>{
          console.log("Responseget", Response.data.kwhValue);
          for(const obj of Response.data.kwhValue)
          {
              console.log("obj", obj);
              // salary.push(obj.employee_salary);
              kwh.push(obj.last);
              // location.push(obj.location);
          }
          console.log("KWH", kwh);
          this.setState({
              options: {
                  chart: {
                    id: 'apexchart-example'
                  },
                  xaxis: {
                    categories:time
                },
                labels: ["KWH"]
            },
            series:[kwh],
          })
          })
            .catch(err=>{
            console.log("err", err);
            })
          }
      render() {
      return (
      <Chart options={this.state.options} series={this.state.series} type="radialBar" width={500}/>
      )
      }
      }


// import FusionCharts from 'fusioncharts';
// import Widgets from 'fusioncharts/fusioncharts.widgets';
// import ReactFC from 'react-fusioncharts';
// import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
// import React from 'react';

// ReactFC.fcRoot(FusionCharts, Widgets, FusionTheme);

// const dataSource = {

//     "chart": {
//         "baseFont": "Nunito Sans",
//         "setAdaptiveMin": "1",
//         "chartTopMargin": "0",
//         "canvasTopMargin": "5",
//         "chartBottomMargin": "70",
//         "chartLeftMargin": "10",
//         "chartRightMargin": "10",
//         "showTickMarks": "0",
//         "showTickValues": "0",
//         "showLimits": "0",
//         "majorTMAlpha": "0",
//         "minorTMAlpha": "0",
//         "pivotFillAlpha": "0",
//         "showPivotBorder": "0",
//         "gaugeouterradius": "150",
//         "gaugeInnerradius": "205",
//         "showGaugeBorder": "0",
//         "gaugeFillMix": "{light+0}",
//         "showBorder": "0",
//         "bgAlpha": "0",
//         "canvasBgAlpha": "0",
//         "transposeAnimation":"1"
//     },


//         "annotations": {
//             "groups": [{
//                 "items": [
//                 {
//                     "id": "2",
//                     "type": "text",
//                     "text": 56.74,
//                     "color": "black",
//                     "align": "center",
//                     "font": "Nunito Sans",
//                     "bold": "1",
//                     "fontSize": "45",
//                     "x": "$chartcenterX",
//                     "y": "$chartCenterY"
//                 }, {
//                     "id": "3",
//                     "type": "text",
//                     "color": "black",
//                     "text": "KWP",
//                     "align": "center",
//                     "font": "Nunito Sans",
//                     "bold": "0",
//                     "fontSize": "25",
//                     "x": "$chartcenterX",
//                     "y": "$chartCenterY + 45"
//                 }]
//             }]
//         },

//         "colorRange": {
//             "color": [{
//                 "minValue": "480",
//                 "maxValue": 56.74,
//                 "code": "#58E2C2"
//             },
//             {
//                 "minValue": 75,
//                 "maxValue": "650",
//                 "code": "#48506E"
//             }
//             ]
//         },

//         "dials": {
//             "dial": [{
//                 "value": 81,
//                 "alpha": "0",
//                 "borderAlpha": "0",
//                 "radius": "0",
//                 "baseRadius": "0",
//                 "rearExtension": "0",
//                 "baseWidth": "0",
//                 "showValue": "0"
//             }]
//         }
//     };
    

// class ChartKwh extends React.Component {
//   render() {
//     return (
//         <ReactFC
//         type="angulargauge"
//         width="100%"
//         hight="500px"
//         dataFormat="JSON"
//         dataSource={dataSource}
//       />
//     );
//   }
// }

// export default ChartKwh