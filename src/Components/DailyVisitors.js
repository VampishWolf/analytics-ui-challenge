import React from 'react'
import {Bar} from 'react-chartjs-2';

const state = {
    labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'],
    datasets: [
      {
        label: 'Visitors',
        backgroundColor: 'rgba(30, 106, 218,1)',
        barThickness: 15,
        borderRadius: 3,
        data: [4000, 5000, 6500, 1500, 5000, 6500, 4500, 5500, 1500, 6300, 7012, 5000, 6700, 1600, 3800, 1500, 6300, 1500, 5000, 6400, 6900, 4600, 7100, 1300, 4400, 3900, 2000, 5800, 2100, 3300, 7250]
      }
    ]
  }

const chartStyle = {
    height: '200px'
}

export default function DailyVisitors() {
    return (
        <div className="bg-white shadow-sm divide-y rounded text-left border border-gray-200">
            <div className="font-semibold py-4 px-8">Daily Visitors
                <select name="year" id="year" className="flex-none pr-4 float-right border-2 border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-100">
                    <option value="2018">2018</option>
                </select>
                <select name="month" id="month" className="flex-none pr-4 mx-2 float-right border-2 border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-100">
                    <option value="December">December</option>
                </select>
            </div>
            <div className="font-semibold h-60">
                <Bar className={chartStyle}
                    data={state}
                    options={{
                        responsive: true,
                        maintainAspectRatio: false,
                        title:{
                            display: true,
                            text:'Average Users per month',
                            fontSize:20,
                        },
                        layout: {
                            padding: 30
                        },
                        scales: {
                            xAxes: [
                                {
                                  gridLines: {
                                    display: false,
                                  },
                                },
                              ],
                          },
                        legend:{
                            display: false
                        },
                        
                    }}
                />
            </div>
        </div>
    )
}
