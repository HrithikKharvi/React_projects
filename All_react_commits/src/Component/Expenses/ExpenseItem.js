import './ExpenseItem.css'
import ExpenseDate from "./ExpenseDate.js";
import CoverComponent from "../UI/CoverComponent.js";
import React, { useState } from "react";

function ExpenseItem(props) {

    return (
        <li>
            <CoverComponent className="expense-item">
                <ExpenseDate date={props.date}></ExpenseDate>
                <div className="expense-item__description">
                    <h2>
                        {props.details}
                    </h2>
                    <div className="expense-item__price">
                        ${props.amount}
                    </div>
                </div>  
            </CoverComponent>
        </li>
    )
}

export default ExpenseItem;
