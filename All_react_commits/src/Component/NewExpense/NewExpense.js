import React from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css'

function NewExpense(props) {

    const saveData = (savedData) => {
        const data = {...savedData,
                      id:Math.random()    
                    }

        props.onSaveData(data);
    }

    return <div className='new-expense'>
        <ExpenseForm onSaveData={saveData}></ExpenseForm>
    </div>
}

export default NewExpense;
