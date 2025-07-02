import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Component } from 'react'

function App() {
  const [counter, setCounter] = useState(0)
  const [inputValue, setInputValue] = useState(1)

  const incrementCounter = () => {
    setCounter(counter + 1);
  }

  const decrementCounter = () => {
    setCounter(counter - 1);
  }

  const setCounterNumber = () => {
    setCounter(inputValue);
  }

  return (
    <>
      {/* <Count counter={counter} hello={"hello"} array={[1, 2, 3, '안녕하세요.']} /> */}
      <Count counter={counter} />
      <PlusButton setCounter={setCounter} incrementCounter={incrementCounter} />
      <MinusButton setCounter={setCounter} decrementCounter={decrementCounter} />
      <CounterInput inputValue={inputValue} setInputValue={setInputValue} setCounterNumber={setCounterNumber} />
    </>
  )
}

function CounterInput( { inputValue, setInputValue, setCounterNumber } ) {
  return (
    <>
      <input type='number' value={inputValue} onChange={(event) => setInputValue(event.target.value)} />
      <button onClick={setCounterNumber}>입력</button>
    </>
  )
}

function PlusButton({setCounter, incrementCounter}) {
  return <button onClick={incrementCounter}>+</button>;
}

function MinusButton({setCounter, decrementCounter}) {
  return <button onClick={decrementCounter}>-</button>;
}

export default App

// class ClassApp extends Component {
//   state = {counter: 1};

//   incrementCounter = () => {
//     this.setState({counter: this.state.counter + 1});
//   }

//   decrementCounter = () => {
//     this.setState({counter: this.state.counter - 1});
//   }

//   render() {
//     return (
//       <>
//         <Count counter={this.state.counter} />
//         <PlusButton incrementCounter={this.incrementCounter} />
//         <MinusButton decrementCounter={this.decrementCounter} />
//       </>
//     )
//   }
// }

function Count ({array, counter, hello}) {
  // console.log('array', array);
  // console.log('counter', counter);
  // console.log('hello', hello);
  return <div>Counter : {counter}</div>
}

// class PlusButton extends Component {
//   render() {
//     return(
//       <button 
//         onClick={this.props.incrementCounter}
//       >
//         +
//       </button>
//     )
//   }
// }

// class MinusButton extends Component {
//   render() {
//     return (
//       <button
//         onClick={this.props.decrementCounter}
//       >
//         -
//       </button>
//     )
//   }
// }

// export default ClassApp;