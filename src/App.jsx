import { useEffect, useState, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Component } from 'react'

function App() {
  const {count, increment, decrement} = useCounter(0, 5)
  const {loading : loading1, data : data1} = useFetch("http://localhost:3000/data");
  const {loading : loading2, data : data2} = useFetch("http://localhost:3001/data");
  const {loading : loading3, data : data3} = useFetch("http://localhost:3002/data");

  return (
    <div>
      <div>count: {count}</div>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      {!loading1 && (
        <ul>
          {data1.map(el => <li key={'data1' + el.id}>{el.content}</li>)}
        </ul>
      )}
      {!loading2 && (
        <ul>
          {data2.map(el => <li key={'data1' + el.id}>{el.content}</li>)}
        </ul>
      )}
      {!loading3 && (
        <ul>
          {data3.map(el => <li key={'data1' + el.id}>{el.content}</li>)}
        </ul>
      )}
    </div>
  )
}

const useFetch = (url) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
    .then((res) => res.json())
    .then((res) => {
      setData(res)
      setLoading(false)
    })
    .catch((err) => {
      setError(err)
      setLoading(false)
    })
  }, [url]);

  return {loading, data, error};
}

const useCounter = (initialValue = 0, step = 1) => {
  const [count, setCount] = useState(initialValue);

  const increment = () => setCount((prev) => prev + step)
  const decrement = () => setCount((prev) => prev - step)

  return {count, increment, decrement}
}

export default App;

// useRef 연습
// function App() {
//   return (
//     <>
//       <ControlledInput />
//       <br />
//       <UseRefInput />
//       <Counter />
//     </>
//   )
// }

// export default App;

// const Counter = () => {
//   const [counter, setCounter] = useState(0)
//   const numberRef = useRef(null)

//   return (
//     <>
//       <div>Counter : {counter}</div>
//       <button onClick={() => setCounter(prev => prev + 1)}>+</button>
//       <button onClick={() => setCounter(prev => prev - 1)}>-</button>
//       <br />
//       <button onClick={() => numberRef.current = counter}>Keep Value</button>
//       <button onClick={() => console.log(numberRef.current)}>Show Value</button>
//     </>
//   )
// }

// const UseRefInput = () => {
//   const inputRef = useRef(null)
//   const getInputValue = () => {
//     console.log(inputRef.current.value)
//   }
//   const focusInput = () => {
//     inputRef.current.focus();
//   }
//   return (
//     <>
//       <input ref={inputRef} />
//       <button onClick={getInputValue}>input 값 가져오기</button>
//       <button onClick={focusInput}>focus!!</button>
//     </>
//   )
// }

// const ControlledInput = () => {
//   const [inputValue, setInputValue] = useState('');

//   return (
//     <input value={inputValue} onChange={(event) => setInputValue(event.target.value)} />
//   )
// }

// function App() {

//   const [data, setData] = useState([])

//   useEffect(() => {
//     fetch("http://localhost:3000/data")
//     .then((res) => res.json()) // Promise 반환
//     .then((res) => setData(res)) // 서버에서 주는 데이터가 출력됨
//   }, [])
    
//   return (
//     <>
//       <div>데이터 목록</div>
//       {data.map((el) => (
//         <div key={el.id}>{el.content}</div>
//       ))}
//       <MouseFollower />
//       <ScrollIndicator />
//       <AlertTimer />
//       <div style={{height: "300vh"}}></div>
//     </>
//   )
// }

// const MouseFollower = () => {
//   const [position, setPosition] = useState({x: 0, y: 0})

//   useEffect(() => {
//     const handleMouseMove = (event) => {
//       setPosition({x: event.clientX, y: event.clientY})
//       console.log("mousemoved")
//     }
//     window.addEventListener("mouseover", handleMouseMove);

//     return () => {
//       window.removeEventListener("mouseover", handleMouseMove);
//     }
//   })

//   return (
//     <div 
//       style={{
//         position: "fixed",
//         top: position.y,
//         left: position.x,
//         width: "20px",
//         height: "20px",
//         borderRadius: "50%",
//         backgroundColor: "blue",
//         transform: "translate(-50%, -50%)",
//         pointerEvents: "none"
//       }}
//     >

//     </div>
//   )
// }

// const ScrollIndicator = () => {
//   const [scrollWidth, setScrollWidth] = useState(0);
//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollTop = window.scrollY;
//       const windowHeight = 
//         document.documentElement.scrollHeight
//       - document.documentElement.clientHeight
//       const scrollPercentage = (scrollTop / windowHeight) * 100;
//       setScrollWidth(scrollPercentage);
//     }
//     window.addEventListener("scroll", handleScroll)
//     return () => {
//       window.removeEventListener("scroll", handleScroll)
//     }
//   })
//   return (
//     <div style={{
//       position: "fixed",
//       top: 0,
//       left: 0,
//       width: `${scrollWidth}%`,
//       height: "10px",
//       backgroundColor: "blue"
//     }}></div>
//   )
// }

// const AlertTimer = () => {
//   const [showAlert, setShowAlert] = useState(true);
//   useEffect(() => {
//     const setTimeoutId = setTimeout(() => {
//       showAlert === true ? alert('시간 초과') : null
//     }, 3000)

//     return () => {
//       clearTimeout(setTimeoutId)
//     }
//   })

//   return (
//       <button onClick={() => setShowAlert(false)}>빨리 클릭!!</button>
//   )
// }

// export default App;

// 조건부 랜더링 연습
// function App() {
//   const [mood, setMood] = useState('Normal');
//   return (
//     <>
//       <Face3 mood={mood} />
//       <div className={mood === "Happy" ? 'happy' : mood === "Normal" ? 'normal' : 'sad'}>기분 : {mood}</div>
//       <div>
//         <button onClick={() => setMood("Happy")}>Happy</button>
//         <button onClick={() => setMood("Normal")}>Normal</button>
//         <button onClick={() => setMood("Sad")}>Sad</button>
//       </div>
//     </>
//   );
// }


// // If 문으로 리턴하는 JSX문
// function Face ({mood}) {
//   if (mood === 'Happy') {
//     return <div>😊</div>
//   } else if(mood === 'Normal') {
//     return <p>😑</p>
//   } else {
//     return <span>😭</span>
//   }
// }

// // 삼항연산자 사용
// function Face2({mood}) {
//   return (
//     <>
//       {mood === "Happy" ? (
//         <div>😊</div>
//       ) : mood === "Normal" ? (
//         <p>😑</p> 
//       ) : (
//         <span>😭</span>
//       )}
//     </>
//   )
// }

// // 논리 연산자 사용
// function Face3({mood}) {
//   return (
//     <>
//       {mood === "Happy" && <div>😊</div>}
//       {mood === "Normal" && <p>😑</p>}
//       {mood === "Sad" && <span>😭</span>}
//     </>
//   )
// }

// export default App;

// 상태 연습
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