import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter, setCounter] = useState(0)

  return (
    <>
      <Count counter={counter} hello={"hello"} array={[1, 2, 3, '안녕하세요.']} />
      <button 
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          setCounter(counter - 1);
        }}
      >
        -
      </button>
    </>
  )
}

export default App

function Count ({array, counter, hello}) {
  console.log('array', array);
  console.log('counter', counter);
  console.log('hello', hello);
  return <div>Counter : {counter}</div>
}