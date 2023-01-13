import React from "react";
import { useState } from "react";
import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

// 구별을 위해 상수는 대문자로 SNAKE_CASE를 사용한다. 
const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    // ModernJS에서 본 기본 문법이다. 기본 원소에 콤마(,)와 ...연산자를 써서 새로운 배열을 만든다.
    // expense는 배열이다. 따라서 아래처럼 표현식이 나온다. 
    // 그러나 좀 특별한 함수를 써야 할 필요가 있다.
    // setExpenses([expense, ...expenses]);
    setExpenses((prevExpenses)=>{ // prev는 React에 의해 자동으로 생성된다. 
      console.log(prevExpenses);
      console.log(expense);
      console.log([expense, ...prevExpenses]);
      return [expense, ...prevExpenses];
    });
    // console.log('In App.js');
    // console.log(expense);
  };

  // return React.createElement('div', {},
  //   React.createElement('h2', {}, 'Let\'s get started!'),
  //   React.createElement(Expenses, { items: expenses })
  // );

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      {/* props에 items라는 이름으로 expenses를 보내겠다. */}
      <Expenses items={expenses} />
      {/* <h2>Let's get started!</h2> */}
      {/* p는 단락을 의미 */}
      {/* <p>This is also visible!</p> */}
      {/* 대문자로 시작하는 요소는 커스텀된 요소임을 표시한다 */}
      {/* <ExpensItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date} />
      <ExpensItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date} />
      <ExpensItem title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date} />
      <ExpensItem title={expenses[3].title} amount={expenses[3].amount} date={expenses[3].date} /> */}
    </div>
  );

}
// JS 안에 HTML이 들어가 있다. 이런 걸 JSX라고 한다.
// React만의 고유한 구문이다. 
export default App;
