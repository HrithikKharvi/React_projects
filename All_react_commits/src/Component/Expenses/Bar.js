import React from 'react'
import './Bar.css'

export default function Bar(props){
    let barFillHeight = '0%';

    if(props.max > 0){
        barFillHeight = Math.round(((props.value/props.max) * 100)) + "%";
    }
    return (
        <div className="chart-bar">
            <div className="chart-bar__inner">
                <div className="chart-bar__fill" style={{height : barFillHeight}}>
                </div>
            </div>
            <div className="chart-bar__label">
                {props.labelName}
            </div>
        </div>
    )
}