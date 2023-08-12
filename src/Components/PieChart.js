import { useState } from "react";
import { Doughnut } from 'react-chartjs-2';
import {Chart, ArcElement} from 'chart.js'
import "../CSS/PieChart.css"
Chart.register(ArcElement);

export default function PieChart({pieChartArray}){
    const backgroundColors = ["#F5AB75", "#4FEF63", "#1F1F1F", "#9399FC", "#EDB4F6", "#FF1D1D", "#FB8256", "#39B44A", "#FB8256", "#161413", "#1DA1F2"]
    const [data, setData] = useState({
        labels: ['Option 1', 'Option 2', 'Option 3'],
        datasets: [{
            data: pieChartArray[0],
            backgroundColor: backgroundColors,
            hoverBackgroundColor: ['#FF5A5E', '#5AD3D1', '#FFC870']
        }]
    });
    return (
        <section className="pieChart">
            
            <Doughnut data={data} />
            
            <div className="pieChartLabels">
            {
                pieChartArray[1].map((labels, index) => {
                    return <div className="pieChartLabel" key={index}>
                                <div style={{backgroundColor: `${backgroundColors[index]}`, width:"10px", height:"10px"}}></div>
                                <p className="pieChartParas">{labels}</p>
                            </div>
                   
                })
            }
            </div>
        </section>
    )
}