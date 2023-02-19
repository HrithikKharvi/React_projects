import React, {useState} from 'react';

import ExpensesList from './ExpensesList.js';
import CoverComponent from '../UI/CoverComponent.js';
import ExpenseFilter from "./ExpenseFilter.js"
import ExpenseChart from './ExpenseChart.js'

import './Expenses.css'

function Expenses(props) {
    // let data = props.data;

    const [filterYear, setFilterYear] = useState('2022');

    const changeYearFilter = (year) =>{
        setFilterYear(year);
    }

    let filteredData = props.data.filter(expense => expense.date.getFullYear() == filterYear);
    
    return (
        <CoverComponent className="expenses">
            <ExpenseFilter filteredYear={filterYear} onYearChange={changeYearFilter}></ExpenseFilter>
            <ExpenseChart expenses={filteredData}></ExpenseChart>
            <ExpensesList expenses = {filteredData}/>
        </CoverComponent>
    );
}

export default Expenses;