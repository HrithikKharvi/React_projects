import React from 'react'
import ExpenseItems from './ExpenseItem.js'
import './ExpensesList.css'

const ExpensesList = props =>{
    if(props.expenses.length > 0){
        return <ul className="expenses-list">
            {props.expenses.map(expense => <ExpenseItems key={expense.id} date={expense.date} details={expense.details} amount={expense.price}/>)};
        </ul>
    }

    return <p className='expenses-list__fallback'>no Items for the year!</p>
}

export default ExpensesList