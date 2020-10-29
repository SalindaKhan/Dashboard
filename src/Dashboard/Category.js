import React from "react";
import { Bar } from "react-chartjs-2";
import {Row} from 'antd'
const Category = () => {
  const data = {
    labels: [
      "Inthanon 10k",
      "Inthanon 1(25k)",
      "Inthanon 4(80k)",
      "Inthanon 5(120k)",
      "Inthanon 6(175k)",
    ],
    datasets:[
      {
        barThickness:25,
        data:[8000,5000,7000,5000,8000],
        backgroundColor:'#13eecc',
        
      }
    ]
  }
  const option ={
    legend: {
      display: false,
    },
    scales:{
      yAxes:[
        {
          ticks:{
            min:0,
            max:10000,
            stepSize:2000
          },
        }
      ]
      
    }
  }

  return (
    <Row style={{padding:5}}>
        <h1 style={{font: "normal normal bold 20px/32px Sukhumvit Set" , color: "#171717", marginLeft: 20 }}>ประเภทการแข่งขัน</h1>
      <Bar data ={data} options={option} />
    </Row>
  )

};

export default Category;
