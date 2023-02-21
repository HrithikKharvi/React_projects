import './App.css';
import React, {useState} from 'react';
import InputForm from './Component/InputForm.js'
import User from './Component/User.js'
import WarningComponent from './Component/WarningComponent';

function App() {

  const dummyData = [
    // {name:"Hrithik",age:21, id:1},
    // {name:"Rakshita",age:27, id:2},
    // {name:"Akash",age:29, id:3},
    // {name:"Sam",age:30, id:4}
  ]

  const [data, setData] = useState(dummyData);
  const [isValid, setIsValid] = useState(true);
  const [warningMessage, setWarningMessage] = useState("");

  function submitHandler(newData){
    setData(prev =>{
      return [newData,...prev]
    })
  }

  function failHandler(message){
    setIsValid(false);
    console.log(message)
    setWarningMessage(message);
  }

  function clearWarning(){
    setIsValid(true);
  }

  let warningContent = "";
  if(!isValid){
    warningContent = <WarningComponent message={warningMessage} onOkay={clearWarning}></WarningComponent>;
  }

  return (
    <div className="App">
     <div className="componentContainer">
        <InputForm onSubmit={submitHandler} invalidHanlder={failHandler}></InputForm>
        <User data={data}></User>
     </div>
     {warningContent}
    </div>
  );
}

export default App;
