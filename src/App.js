import ExpenseForm from "./ExpenseForm";
import ExpenseFilter from "./ExpenseFilter";
import Chart from "./Chart";
import ExpenseItem from './ExpenseItem'

import styles from "./App.module.css"

import {expenseArr} from './Expense'
import {Expense} from './Expense'

import {useState} from 'react';

function App() {
  const yearsSet = new Set();
  expenseArr.forEach(item => yearsSet.add(item.date.getFullYear()));
  const yearsArr = new Array(...yearsSet);
  yearsArr.sort();

  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  const[year, setYear] = useState("all");
  const[newExpenseArr, setExpenseArr] = useState();

  function selectYear(selectedYear) {
    setYear(selectedYear);
  }

  function newExpenseHandler(newExpendeArr) {
    setExpenseArr(expenseArr.unshift(new Expense(newExpendeArr[0], newExpendeArr[1], newExpendeArr[2])));
  }

  return (
    <div className={styles.container}>
      <ExpenseForm func={newExpenseHandler}/>
      <div className={styles.background}>
        <div className={styles["expenses-container"]}>
          <ExpenseFilter years = {yearsArr} func = {selectYear}/>
          <Chart months = {months} year = {year} expenseArr = {expenseArr.filter(item => item.date.getFullYear() == year)}/>
          {year == "all" ? 
            expenseArr.map(item => 
              <ExpenseItem 
                title = {item.title}
                price = {item.price}
                date = {item.date}
                months = {months}
              />
            )
          :
            expenseArr.filter(item => item.date.getFullYear() == year).map(item => 
              <ExpenseItem 
                title = {item.title}
                price = {item.price}
                date = {item.date}
                months = {months}
              />
            )
          }
        </div>
      </div>
    </div>

  );
}

export default App;
