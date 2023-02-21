import React, {useState} from 'react';
import style from './InputForm.module.css';
import Input from '../UI/Input.js'
import Button from '../UI/Button.js'
import Card from '../UI/Card.js'

export default function InputForm(props) {

  const [username, setUsername] = useState('');
  const [age, setAge] = useState(0);

  function setName(text){
    setUsername(text);
  }

  function changeAge(newAge){
    setAge(newAge);
  }

  function submitHandler(e){
    e.preventDefault();
    if(username.length<=0 && age <= 1)return props.invalidHanlder("Please enter valid name and age > 1");
    if(username.length <= 0){
      return props.invalidHanlder("Please enter valid name!");
    }else if(age < 1){
      return props.invalidHanlder("Please enter age >1!");
    }
    let newData = {name:username, age:age, id:Math.random()}
    props.onSubmit(newData);
    setUsername('');
    setAge(0);
  }

  return (
    <Card>
      <form onSubmit={submitHandler} className={style.formControll}>
        <label>Username</label>
        <Input onChange={setName} value={username}type="text"/>
        <label>Age (Year)</label>
        <Input onChange={changeAge} value={age} type="number"/>
        <Button type='submit'>
            Add User
        </Button>
    </form>
    </Card>
  )
}

