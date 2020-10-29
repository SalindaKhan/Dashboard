import React from 'react'
import { Bar } from '@reactchartjs/react-chart.js'

const data = {
  labels: ['ต่ำกว่า 1000 บาท ', '1000 ถึง 5000', '5000 ถึง 10000', '10000 ถึง 30000', '30000 ถึง 50000', '50000 ถึง 80000','80000 ถึง 100000','มากกว่า 100000',],
  
  datasets: [
    {
        label: 'มูลค่าทางเศรษฐกิจที่เกิดระหว่างการแข่งขัน ',
        data: [3000, 8200, 6500, 3100,6700, 6700, 6700, 6700 ],
        backgroundColor: '#13EECC',
    },
    {
        label: 'มูลค่าทางเศรษฐกิจที่เกิดก่อนการแข่งขัน      ',
        data: [4500, 4500, 4500, 4500, 8200, 4300, 4300, 7800],
        backgroundColor: '#3B88FD'
    },
  ],
}

const options = {
    legend: {
      position : "top",
      align : "end",
      fullWidth: true,
  
      labels :{
             boxWidth: 15 ,
             fontColor: "#4D4F5C",
             fontFamily: "Sukhumvit Set" ,
             padding: 10 , 
      }
    },
  
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
            min: 0,
            max: 10000,
            stepSize: 2000
          },
        },
      ],
    },
  }

const Value = () => (
  <>
    <div className='header'>
    <h1 style={{font: "normal normal bold 20px/32px Sukhumvit Set" , color: "#171717", marginLeft: 20 }}>มูลค่าทางเศรษฐกิจ</h1>
      <div className='links'>
      </div>
    </div>
    <Bar data={data} options={options} />
  </>
)

export default Value;