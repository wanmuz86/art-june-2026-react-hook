import React, { useState } from 'react'


const ConditionalRendering: React.FC = () => {

  // A state to store user IsLoggedIn or Not
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const toggleButton = () => {
    setIsLoggedIn(!isLoggedIn);
  }

  return (
    <div>
      <h1>Conditional Rendering Example</h1>
      {/* Depending on the value of isLoggedIn, either the "Welcome back, User!" message or the "Please log in." message is displayed. */}
      <h2>{ isLoggedIn ? 'Welcome Back ': "Hello Guest!"}</h2>
      <button onClick={toggleButton}>
        {/* Conditonally showed the message based on the state */}
        {
        isLoggedIn ? 'Log Out' : 'Log In'
        }
      </button>
    </div>
  )
}

export default ConditionalRendering