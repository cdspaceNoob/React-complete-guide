import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
import { useState } from 'react';

const NewExpense = (props) => {
    // const [buttonState, SetButtonState] = useState(0);
    const [isEditing, setIsEditing] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString(),
        };
        // console.log(expenseData);
        props.onAddExpense(expenseData);
        // SetButtonState(0);
        setIsEditing(false);
    };

    // const buttonStateHandler = () => {
    //     SetButtonState(1);
    //     // console.log("button status = 1")
    // };

    const startEditingHandler = () => {
        setIsEditing(true);
    }

    const stopEditingHandler = () => {
        setIsEditing(false);
    }

    // let expense = '';

    // const addNewExpenseButton =
    //     <div className='new-expense'>
    //         <button
    //             className='new-expense__actions'
    //             onClick={buttonStateHandler}
    //         >Add New Expense</button>
    //     </div >;

    // const expenseForm =
    //     <div className='new-expense'>
    //         <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    //     </div>;

    // if (buttonState) {
    //     expense = expenseForm;
    // } else {
    //     expense = addNewExpenseButton;
    // }

    return (
        <div className='new-expense'>
            {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
            {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandler} />}
            {/* <div className='new-expense'>
                <button className='new-expense__actions'>Add New Expense</button>
            </div>
            <div className='new-expense'>
                <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
            </div> */}
            {/* {expense} */}
        </div>
    );
}

export default NewExpense;