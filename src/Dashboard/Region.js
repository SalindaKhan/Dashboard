import React from "react";
import {Pie,} from 'react-chartjs-2'
import {Col} from 'antd'

const  Region = () => {
  const data ={
    labels:[
      'เหนือ',
      'กลาง',
      'อีสาน',
      'ใต้',
      'ตะวันออก',
      'ตะวันตก'
    ],
    datasets:[
      {
        data:[26,40,20,20,40,26],
        backgroundColor:[
          '#13eecc',
          '#3b88fd',
          '#0a5bb4',
          '#6204bf',
          '#f2e635',
          '#f205cb'
        ],
        borderWidth:1,
        hoverBorderWidth:5,
        hoverBorderColor:[
          '#13eecc',
          '#3b88fd',
          '#0a5bb4',
          '#6204bf',
          '#f2e635',
          '#f205cb'
        ],
        hoverBackgroundColor:[
          '#13eecc',
          '#3b88fd',
          '#0a5bb4',
          '#6204bf',
          '#f2e635',
          '#f205cb'
        ],
        
        
      }
    ]
  }
  const options = {
    legend: {
      display: true,
      position: 'bottom',
      labels:{
        boxWidth:15,
        fontSize: 15,
        fontColor: '#000000',
        fontFamily:'Sukhumvit Set',
      },
    },
  }

  return (
    <Col >
      <Pie data={data} options={options} />
    </Col>
     
  );
};
export default Region;
