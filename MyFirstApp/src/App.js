import React, {useState} from 'react'
import logo from './logo.svg';
import './App.css';
import Expenses from './Component/Expenses/Expenses.js'
import NewExpense from "./Component/NewExpense/NewExpense.js"

let dummy_data = [
  {
    id:'e1',
    date: new Date(2022, 2, 8),
    details: "Car insurance",
    price: 200
  },
  {
    id:'e2',
    date: new Date(2022, 3, 9),
    details: "Toilet paper",
    price: 10
  },
  {
    id:'e3',
    date: new Date(2022, 0, 10),
    details: "Tooth Brush",
    price: 20
  },
  {
    id:'e4',
    date: new Date(2022, 2, 9),
    details: "News Paper",
    price: 10
  }
]

export default function App() {

  const [data, setData] = useState(dummy_data)
  console.log(dummy_data[0].date.getFullYear())

  function dataChangeHandler(newData){
    setData(prevData =>{
      return [newData, ...prevData];
    })
  }

  return (
    <div className="App">
      <NewExpense onSaveData={dataChangeHandler}></NewExpense>
      <Expenses data={data}
      ></Expenses>
    </div>
  );
}
