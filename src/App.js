import React from "react";
import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

const App = () => {
  const expenses = [
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

  const addExpenseHandler = (expense) => {
    console.log('In App.js');
    console.log(expense);
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
