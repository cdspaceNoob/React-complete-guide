import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

function ExpensItem(props) {

    // month는 0부터 시작한다. 1월은 0이 된다. 
    // 이는 React와는 관련 없는 단순히 JavaScript 코드다.
    const expenseDate = new Date(2022, 0, 10);
    const expenseTitle = 'Car Insurance';
    const expenseAmount = 321.5;

    return (
        <div className='expense-item'>
            <ExpenseDate date={props.date} />
            {/* expenseDate는 객체이므로 이를 곧장 문자열로 출력할 수는 없다. 변환이 필요하다. */}
            {/* <div>{props.date.toISOString()}</div> */}
            <div className='expense-item__description'>
                <h2>{props.title}</h2>
                <div className='expense-item__price'>${props.amount}</div>
            </div>
        </div>
    );

}

export default ExpensItem;