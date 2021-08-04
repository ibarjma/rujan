import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'

import CanvasJSReact from './../lib/canvasjs.react'
var CanvasJSChart = CanvasJSReact.CanvasJSChart

export default function Chart() {
  // The initial values animate, as expected
  const [dataPoints, setDataPoints] = useState([])
  const [title, setTitle] = useState('Initial Animation is Fine')

  const options = {
    animationEnabled: true,
    // theme: 'light2', //"light1", "dark1", "dark2"
    title: {
      text: title,
    },
    axisY: {
      title: 'Total',
      includeZero: false,
    },
    toolTip: {
      shared: true,
    },
    data: [
      {
        type: 'spline',
        name: 'followers',
        showInLegend: true,
        // toolTipContent: '{x}: {y}',
        // xValueFormatString: 'DD MMM YYYY',
        // yValueFormatString: '#',
        dataPoints: dataPoints,
      },
      {
        type: 'spline',
        name: 'following',
        showInLegend: true,
        // toolTipContent: '{x}: {y}',
        // xValueFormatString: 'DD MMM YYYY',
        // yValueFormatString: '#',
        dataPoints: [
          {
            x: 1483228800000,
            y: 851.3,
          },
          {
            x: 1485907200000,
            y: 879.6,
          },
          {
            x: 1488326400000,
            y: 917.75,
          },
          {
            x: 1491004800000,
            y: 930.05,
          },
          {
            x: 1493596800000,
            y: 962.25,
          },
          {
            x: 1496275200000,
            y: 1520.9,
          },
          {
            x: 1498867200000,
            y: 2077.1,
          },
          {
            x: 1501545600000,
            y: 5917.9,
          },
        ],
      },
    ],
  }
  const [initialized, setInitialized] = useState(false)

  useEffect(async () => {
    if (!initialized) {
      const result = await axios(
        'https://canvasjs.com/data/gallery/react/nifty-stock-price.json'
      )
      try {
        // setDataPoints(result.data);
        console.log(result)
      } catch (e) {
        console.log(e)
      } finally {
        let data = []
        for (var i = 0; i < result.data.length; i++) {
          data.push({
            x: new Date(result.data[i].x),
            y: result.data[i].y,
          })
        }

        setDataPoints(data)
      }

      setTitle('Followers line graph')
      //Calling render makes no difference
      setInitialized(true)
      // console.log(dataPoints)
      console.log(dataPoints)
    }
  }, [initialized])

  const containerProps = {
    height: 'calc(80vh - 150px)',
  }
  return (
    <div className='App'>
      {!initialized ? (
        <h1> Loading...</h1>
      ) : (
        <CanvasJSChart containerProps={containerProps} options={options} />
      )}
    </div>
  )
}

// export default function Chart(props){
//     const [chart, setChart] = useState("");
//     useEffect(() => {
//   console.log('counter changed!')
// }, [chart])

//     const options = {
//       theme: 'light2',
//       title: {
//         text: 'Stock Price of NIFTY 50',
//       },
//       axisY: {
//         title: 'Price in USD',
//         prefix: '$',
//       },
//       data: [
//         {
//           type: 'line',
//           xValueFormatString: 'MMM YYYY',
//           yValueFormatString: '$#,##0.00',
//           dataPoints: dataPoints,
//         },
//       ],
//     }
//     return (
//       <div>
//         <CanvasJSChart options={options} onRef={(ref) => (props.chart = ref)} />
//         {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
//       </div>
//     )

//    }

//      componentDidMount() {
//        var chart = this.chart
//        fetch('https://canvasjs.com/data/gallery/react/nifty-stock-price.json')
//          .then(function (response) {
//            return response.json()
//          })
//          .then(function (data) {
//            for (var i = 0; i < data.length; i++) {
//              dataPoints.push({
//                x: new Date(data[i].x),
//                y: data[i].y,
//              })
//            }
//            chart.render()
//          })
//      }
