import React, { useState } from 'react'


const Counter: React.FC = () => {

    // getter, (to retrieve the value)
    // setter (method to set the value)
    // In array destructuring, arrangement matter
    // 1st - getter, 2nd setter
const [counter,setCounter] = useState<number>(0);


// FUnction that will be called from a button
// that will update the state accordingly
// The component will be rendered/ Part of UI is refreshed

const increment = () => setCounter(counter+1)
const decrement = () => setCounter(counter-1);
  return (
    <div>
        {/* Retrieving the value of coutner using getter */}
        <h1>Counter: {counter}</h1>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
    </div>
  )
}

export default Counter;