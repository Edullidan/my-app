
import './App.css';
import ChildComponent from './ChildComponent';
import React from 'react';
import { useState } from 'react';
import CounterButton from './CounterButton';



function App() {
  const [count, setCount] = useState(0)

  const increaseBy = (id) =>{
    setCount(count + id)
  }

  return (
   <div>
      <CounterButton count={count} onClick={() => {
        increaseBy(2)
      }}/>
      <CounterButton count={count}  onClick={() => {
        increaseBy(4)
      }}/>
   </div>
  )
}

export default App;

