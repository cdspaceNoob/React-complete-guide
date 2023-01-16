import { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    // 세 번 쓰는 거 말고 한 번 쓰는 방법도 있다.
    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: ''
    // });

    // VanilaJS를 React에서 활용하기. onChange로 실행되기 때문에 event 객체가 자동으로 생성된다.
    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
        // 저장과는 관련 없이, 이 상태로서 인스턴스에 남아있다. 
        // setUserInput({
        //     // 다른 key들도 챙겨야 한다.
        //     ...userInput,
        //     enteredTitle: event.target.value,
        // }) 얘도 좋은 방법은 아니다. 동시에 여러 state를 업데이트할 때 문제가 생길 수 있다. 
        // setUserInput((prevState) => {
        //     console.log(prevState);
        //     return { ...prevState, enteredTitle: event.target.value };
        // });
    };

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredAmount: event.target.value,
        // });
    };

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredDate: event.target.value,
        // });
    };

    const submitHandler = (event) => {
        event.preventDefault(); // submit 시에 작동하는 브라우저의 요청을 막는다.

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate),    // String으로 되어 있는 enteredDate로 date객체 생성.
        };

        // console.log(expenseData);
        props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    };

    // const formClearHandler = (event) => {
    //     event.preventDefault();
    //     setEnteredTitle('');
    //     setEnteredAmount('');
    //     setEnteredDate('');
    // }

    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text' value={enteredTitle} onChange={titleChangeHandler} />
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='number' value={enteredAmount} min='0.01' step='0.01' onChange={amountChangeHandler} />
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' value={enteredDate} min='2019-01-01' max='2022-12-31' onChange={dateChangeHandler} />
                </div>
            </div>
            <div>
                {/* <div className='new-expense__actions'>
                    <button onClick={formClearHandler}>Clear</button>
                </div> */}
                <div className='new-expense__actions'>
                    <button type='button' onClick={props.onCancel}>Cancel</button>
                    <button type='submit'>Add Expense</button>
                </div>
            </div>
        </form >
    );
}

export default ExpenseForm;