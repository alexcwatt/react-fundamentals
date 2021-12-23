// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  const [error, setError] = React.useState(null);
  const usernameRef = React.useRef(null);

  function handleUsernameChange(event) {
    const value = event.target.value;
    const isValid = value === value.toLowerCase();
    setError(isValid ? null : 'Username must be lower case');
  }

  function handleSubmit(event) {
    event.preventDefault();
    const username = usernameRef.current.value;
    onSubmitUsername(username);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input onChange={handleUsernameChange} ref={usernameRef} id="username" type="text" />
      </div>
      <button type="submit" disabled={error !== null}>Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
