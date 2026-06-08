import React, { useState,useEffect } from 'react'


const Counter: React.FC = () => {

    // getter, (to retrieve the value)
    // setter (method to set the value)
    // In array destructuring, arrangement matter
    // 1st - getter, 2nd setter
const [counter,setCounter] = useState<number>(0);


// FUnction that will be called from a button
// that will update the state accordingly
// The component will be rendered/ Part of UI is refreshed

const increment = () => {
    if (counter >= 0 ){
    setCounter(counter+1)
    }

}
const decrement = () => setCounter(counter-1);


// useEffect without []
// This will be called evertime the component is re-rendered
// useEffect(()=>{
//     console.log(counter);
// })

// useEffect with []
// Only be called the first time
// useEffect(()=>{
//     console.log(counter);
// },[])

// useEffect with [counter]
// When the counter value change
// Example use case -> You pass props, and the prop value change to trigger a function call
useEffect(()=>{
    console.log(counter);
},[counter])

// useEffect with return
// When the component is about to go away

useEffect(()=> {
    return () => {
        /// Tthis is where you clean the resources ...
    }
})

  return (
    <div style={{backgroundColor:'red'}}>
        {/* Retrieving the value of coutner using getter */}
        <h1 style={{fontSize:'32px'}}>Counter: {counter}</h1>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
    </div>
  )
}

export default Counter;