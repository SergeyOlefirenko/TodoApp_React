import './App.css';
import React from "react";
import { useState, useContext } from 'react';
import { AppContext } from "./App";
import background from './bg.png'

function Check({ text }) {
  const [isChecked, setIsChecked] = useState(false)
  const [remove, setRemove] = useState(false)
  const { count, setCount, setTodo} = useContext(AppContext)
  const checkHandler = () => {
    setIsChecked(!isChecked);
  }
  const marker = isChecked ? <s>{text}</s> : text;

  const removeHandler = () => {
    setRemove(true);
    setCount(count - 1);
    if(count == 0 || count-1 == 1){
      setTodo('todo')
    }
    else{
      setTodo('todos')
    }
  }
  const binStyle = {
    cursor: 'pointer'
  }
  const dataStyle = {
    margin: '5px auto',
    width: '285px',
    height: '56px',
    backgroundColor: 'rgb(249, 248, 248)'
  }
  return (
    <div>
      {remove === false &&
        <div className='checker' style={dataStyle}>
          <div className='check'>
            <input type='checkBox' id='checkbox' checked={isChecked} onChange={checkHandler} />
            {marker}
          </div>
          <div className='bin'>{isChecked ? <i class="bi bi-trash3-fill" style={binStyle} onClick={removeHandler}></i> : ''}</div>
        </div>
      }
      <div>
      </div>
    </div>
  )
}

const styles = {
  width: '310px',
  height: '500px',
  border: '1.5px none',
  borderRadius: '15px',
  backgroundImage: `url(${background})`,
}
function Data() {
  const { count, setCount, todo, setTodo } = useContext(AppContext)
  const [data, setData] = useState([]);
  const [item, setItem] = useState();
  const add = () => {
    const dataList = [...data, item];
    setData(dataList);
    setItem('');
    setCount(count + 1);
    if (dataList === '') {
      alert('The field is empty')
    }
    if(count == 0 || count+1 == 1){
      setTodo('todo')
    }
    else{
      setTodo('todos')
    }
  };

  return (
    <div className='App'>
      <div style={styles} className='container'>
        <div className='data'>
          <input type="text" placeholder='Add your todo' onChange={(e) => setItem(e.target.value)} value={item} />
          <button onClick={add}>+</button>
        </div>
        <div className='dataList'>
          {data.map((i) => <Check key={i} text={i} />)}
        </div>
        <div className='counter'>
          <h4>You have {count} {todo}</h4>
        </div>
      </div>
    </div>
  )
}
export default Data;