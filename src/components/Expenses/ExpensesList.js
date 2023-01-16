import React from "react";

import ExpenseItem from "./ExpenseItem";
import './ExpensesList.css'

const ExpensesList = (props) => {
    // 이런 것도 가능하다. JSX를 사용할 수 있다. 
    // let expensesContent = <p>No expense found.</p>;

    if (props.items.length === 0) {
        return <h2 className="expenses-list__fallback">Found no expense.</h2>
    }
    // if (props.items.length > 0) {
    //     expensesContent = 
    // }

    return <ul className="expenses-list">
        {props.items.map((expense) =>
        (<ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
        />)
        )}
    </ul>

}

export default ExpensesList;