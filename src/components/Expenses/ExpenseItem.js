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
import React, {useState} from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);
  const clickHandler = () => {
    setTitle("Updated!");
  }
  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;
