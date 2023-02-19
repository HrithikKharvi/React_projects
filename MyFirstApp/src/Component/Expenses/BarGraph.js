import React from 'react'
import Bar from './Bar.js'
import './BarGraph.css'


export default function BarGraph(props){
    const datPointValue = props.dataList.map(d => d.value);
    const maxAmount = Math.max(...datPointValue);

    return (
        <div className="chart">
            {props.dataList.map(d => <Bar key={d.label} value={d.value} labelName={d.label} max={maxAmount}></Bar>)};
        </div>
    )
}