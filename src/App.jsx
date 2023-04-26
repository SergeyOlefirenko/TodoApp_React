import React from "react";
import Data from './Data'
import { useState } from 'react';
import { createContext } from 'react';
export const AppContext = createContext();

function App() {
  const [count, setCount] = useState(0);
  const [todo, setTodo] = useState('todos')
  return (
    <AppContext.Provider value={{
    count,
    setCount,
    todo,
    setTodo
     }}>
     <Data/>
    </AppContext.Provider>  
  );
}

export default App;


