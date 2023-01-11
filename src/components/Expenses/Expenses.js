import Card from "../UI/Card";
import ExpensItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import './Expenses.css';
import { useState } from "react";

function Expenses(props) { //props는 expenses 배열.(객체를 4개 담고 있다)
    const [changedYear, setChangedYear] = useState('');

    const changedYearHandler = (changedYear) => {
        const year = changedYear;
        setChangedYear(year);
        console.log(`In Expenses.js: ${year}`);
    };
    return (
        <div>
            <ExpensesFilter onChangedYear={changedYearHandler} />
            <Card className="expenses">
                <ExpensItem title={props.items[0].title} amount={props.items[0].amount} date={props.items[0].date} />
                <ExpensItem title={props.items[1].title} amount={props.items[1].amount} date={props.items[1].date} />
                <ExpensItem title={props.items[2].title} amount={props.items[2].amount} date={props.items[2].date} />
                <ExpensItem title={props.items[3].title} amount={props.items[3].amount} date={props.items[3].date} />
            </Card>
        </div>
    );
}

export default Expenses;