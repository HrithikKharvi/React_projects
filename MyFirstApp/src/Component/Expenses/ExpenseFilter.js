import './ExpenseFilter.css'

function ExpenseFilter(props){

       
    function changeSelectedValue(event){
        props.onYearChange(event.target.value);
    }
    return (
        <div className="expenses-filter">
            <div className="expenses-filter__control">
                <label>Filter By Year</label>
                <select name="expenseYear" value={props.filteredYear} onChange={changeSelectedValue}>
                    <option value="2023">2023</option>
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                </select>
            </div>    
        </div>
    )
}

export default ExpenseFilter
