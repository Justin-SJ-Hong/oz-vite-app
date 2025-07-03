import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Component } from 'react'

function App() {
  const [mood, setMood] = useState('Normal');
  return (
    <>
      <Face3 mood={mood} />
      <div className={mood === "Happy" ? 'happy' : mood === "Normal" ? 'normal' : 'sad'}>기분 : {mood}</div>
      <div>
        <button onClick={() => setMood("Happy")}>Happy</button>
        <button onClick={() => setMood("Normal")}>Normal</button>
        <button onClick={() => setMood("Sad")}>Sad</button>
      </div>
    </>
  );
}


// If 문으로 리턴하는 JSX문
function Face ({mood}) {
  if (mood === 'Happy') {
    return <div>😊</div>
  } else if(mood === 'Normal') {
    return <p>😑</p>
  } else {
    return <span>😭</span>
  }
}

// 삼항연산자 사용
function Face2({mood}) {
  return (
    <>
      {mood === "Happy" ? (
        <div>😊</div>
      ) : mood === "Normal" ? (
        <p>😑</p> 
      ) : (
        <span>😭</span>
      )}
    </>
  )
}

// 논리 연산자 사용
function Face3({mood}) {
  return (
    <>
      {mood === "Happy" && <div>😊</div>}
      {mood === "Normal" && <p>😑</p>}
      {mood === "Sad" && <span>😭</span>}
    </>
  )
}

export default App;

// function App() {
//   const [counter, setCounter] = useState(0)
//   const [inputValue, setInputValue] = useState(1)

//   const incrementCounter = () => {
//     setCounter(counter + 1);
//   }

//   const decrementCounter = () => {
//     setCounter(counter - 1);
//   }

//   const setCounterNumber = () => {
//     setCounter(inputValue);
//   }

//   return (
//     <>
//       {/* <Count counter={counter} hello={"hello"} array={[1, 2, 3, '안녕하세요.']} /> */}
//       <Count counter={counter} />
//       <PlusButton setCounter={setCounter} incrementCounter={incrementCounter} />
//       <MinusButton setCounter={setCounter} decrementCounter={decrementCounter} />
//       <CounterInput inputValue={inputValue} setInputValue={setInputValue} setCounterNumber={setCounterNumber} />
//     </>
//   )
// }

// function CounterInput( { inputValue, setInputValue, setCounterNumber } ) {
//   return (
//     <>
//       <input type='number' value={inputValue} onChange={(event) => setInputValue(event.target.value)} />
//       <button onClick={setCounterNumber}>입력</button>
//     </>
//   )
// }

// function PlusButton({setCounter, incrementCounter}) {
//   return <button onClick={incrementCounter}>+</button>;
// }

// function MinusButton({setCounter, decrementCounter}) {
//   return <button onClick={decrementCounter}>-</button>;
// }

// export default App

// function Count ({array, counter, hello}) {
//   // console.log('array', array);
//   // console.log('counter', counter);
//   // console.log('hello', hello);
//   return <div>Counter : {counter}</div>
// }

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