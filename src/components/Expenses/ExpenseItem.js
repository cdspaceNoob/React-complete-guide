import { useState } from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

function ExpensItem(props) {
    const [title, setTitle] = useState(props.title);
    // console.log('ExpensItem evaluated by React');
    // let title = props.title;

    const clickHandler = () => {
        console.log('ExpensItem evaluated by React');
        console.log('Clicked!');
        // title = 'changed title!';
        setTitle('changed title!');
        console.log(title);
    }

    // month는 0부터 시작한다. 1월은 0이 된다. 
    // 이는 React와는 관련 없는 단순히 JavaScript 코드다.
    // const expenseDate = new Date(2022, 0, 10);
    // const expenseTitle = 'Car Insurance';
    // const expenseAmount = 321.5;

    return (
        <li>
            <Card className='expense-item'>
                <ExpenseDate date={props.date} />
                {/* expenseDate는 객체이므로 이를 곧장 문자열로 출력할 수는 없다. 변환이 필요하다. */}
                {/* <div>{props.date.toISOString()}</div> */}
                <div className='expense-item__description'>
                    <h2>{title}</h2>
                    <div className='expense-item__price'>${props.amount}</div>
                </div>
                <button onClick={clickHandler}>Change Title</button>
            </Card>
        </li>
    );

}

export default ExpensItem;