/**
 * How to use useState in React?
    1- import useState function from react
    2- pass the property or variable you want to change, in our case is useState(props.title),
       useState function must called inside the component function which we want to reload,
       this useState function returns an array => [the original value which we passed, a function which will update the original value],
       we can assign the returned array using destructuring like this => const [title, setTitle] = useState(props.title),
       so title variable will holds the origingal value and the value we want update which passed to for example to setTitle() function
    3- call setTitle function inside clickHandler, which will called when the click event trigered
    4- put onClick event on the button and assign to it the clickHandler
 */
import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  /* Derived State or Computed State : is a value or something changes accourding to any change in the state */
  // let filterInfoText = "2019, 2021 & 2022";
  // if(filteredYear === "2019") filterInfoText = "2020, 2021 & 2022";
  // else if(filteredYear === "2020") filterInfoText = "2019, 2021 & 2022";
  // else if(filteredYear === "2021") filterInfoText = "2019, 2020 & 2022";
  // else filterInfoText = "2019, 2020 & 2021";

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  }
  return (
      <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
      {/* <p>Data for years {filterInfoText} is hidden.</p> */}
      <ExpenseItem
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
      />
      <ExpenseItem
        title={props.items[1].title}
        amount={props.items[1].amount}
        date={props.items[1].date}
      />
      <ExpenseItem
        title={props.items[2].title}
        amount={props.items[2].amount}
        date={props.items[2].date}
      />
      <ExpenseItem
        title={props.items[3].title}
        amount={props.items[3].amount}
        date={props.items[3].date}
      />
    </Card>
  );
}

export default Expenses;
