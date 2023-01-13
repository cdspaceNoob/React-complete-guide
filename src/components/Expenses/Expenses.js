import React from "react";
import { useState } from "react";
import Card from "../UI/Card";
import ExpensItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import './Expenses.css';

function Expenses(props) { //props는 expenses 배열.(객체를 4개 담고 있다)
    const [filteredYear, setFilteredYear] = useState('2022'); 
    // useState()에 초깃값을 넣어주면 props를 통해서 SELECTED BOX의 기본값을 정해줄 수도 있다. 
    // SELECTED BOX의 option value가 아닌 값을 초깃값으로 정하면 무시된다. (컴파일 에러 발생하지 않는다)

    const filterChangeHandler = (selectedYear) => {
        // ExpensesFilter에서 받아온 연도값. 
        const filteredYear = selectedYear;
        setFilteredYear(filteredYear);
        // const filteredExpenses = props.filter(expense.date);
        console.log(`In Expenses.js: ${filteredYear}`);
        // console.log(props[0]);
    };

    // const filteredExpenses = props.items.filter(expense => expense.date === filteredYear);
    // 아깝다. 아무튼 데이터에서 필터링을 거치고 조건에 부합하는 새로운 데이터를 만들어낸다는 측면에서는 맞췄다. 굿.
    const filteredExpenses = props.items.filter(expense => expense.date.getFullYear().toString() === filteredYear);

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
                {/* data를 ExpenseItem으로 바꾼다. */}
                {/* props.items는 items라는 이름으로 전달된 expenses 배열이다(객체들을 원소로 가지는). */}
                {/* expense는 expenses를 순회하는 currentValue를 의미한다. */}
                {/* {props.items.map(expense => <ExpensItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />)} */}
                {filteredExpenses.map(expense => <ExpensItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />)}
                {/* {props.items.filter(expense => expense.date.toString() === filteredYear)} */}
                {/* <ExpensItem title={props.items[0].title} amount={props.items[0].amount} date={props.items[0].date} />
                <ExpensItem title={props.items[1].title} amount={props.items[1].amount} date={props.items[1].date} />
                <ExpensItem title={props.items[2].title} amount={props.items[2].amount} date={props.items[2].date} />
                <ExpensItem title={props.items[3].title} amount={props.items[3].amount} date={props.items[3].date} /> */}
            </Card>
        </div>
    );
}

export default Expenses;