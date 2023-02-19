import React, { useState } from 'react';
import "./ExpenseForm.css";

function ExpenseForm(props) {

    const [enteredTitle, setEnteredTitle] = useState("");
    const [enteredAmount, setEnteredAmount] = useState("");
    const [enteredDate, setEnteredDate] = useState("");
    const [showForm, setShowForm] = useState(false);

    function titleChangeHandler(event) {
        setEnteredTitle(event.target.value);
    }

    function changeAmountHandler(event) {
        setEnteredAmount(event.target.value);
    }

    function changeDateHandler(event) {
        setEnteredDate(event.target.value);
    }

    function submitHandler(event){
        event.preventDefault();
        const userData = {
            details : enteredTitle,
            price:enteredAmount,
            date: new Date (enteredDate)
        }

        setEnteredTitle("")
        setEnteredAmount("")
        setEnteredDate("")

        props.onSaveData(userData);
    }

    function showFormHandler(event){
        if(event.target.name == 'newFormBtn'){
            setShowForm(true);
        }else{
            setShowForm(false);
        }
    }

    let formContent = <button name='newFormBtn' onClick={showFormHandler}>Add Expense</button>
    if(showForm == true){
        formContent = <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input type="number" min="1" step="1" value={enteredAmount} onChange={changeAmountHandler} />
            </div>

            <div className="new-expense__control">
                <label>Date</label>
                <input type="date" min="2019-03-08" value={enteredDate} onChange={changeDateHandler}></input>
            </div>
            <div className="new-expense__actions">
                <button type='button' onClick={showFormHandler} name='cancelBtn'>Cancel</button>
                <button type="submit" name='submitBtn'>Add new Expense</button>
            </div>
        </div>
    </form>
    }

    return <div> 
                {formContent}
        </div>
}


export default ExpenseForm;
