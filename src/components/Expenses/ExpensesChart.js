import React from 'react';

import Chart from '../Chart/Chart'

const ExpensesChart = (props) => {
    const chartDataPoints = [
        { label: 'Jan', value: 0 },
        { label: 'Feb', value: 0 },
        { label: 'Mar', value: 0 },
        { label: 'Apr', value: 0 },
        { label: 'May', value: 0 },
        { label: 'Jun', value: 0 },
        { label: 'Jul', value: 0 },
        { label: 'Aug', value: 0 },
        { label: 'Sep', value: 0 },
        { label: 'Oct', value: 0 },
        { label: 'Nov', value: 0 },
        { label: 'Dec', value: 0 },
    ];
    // 배열이므로 in 대신 of를 사용한다. expenses는 Expenses에서 넘어온 filteredExpenses 배열이다. 
    for (const expense of props.expenses) {
        const expenseMonth = expense.date.getMonth();   // 1월은 0
        chartDataPoints[expenseMonth].value += expense.amount;
    }

    return (
        <Chart dataPoints={chartDataPoints} />
    );
}

export default ExpensesChart;