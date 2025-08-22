import React from 'react'
import { Button } from './components/Button.jsx'
function App() {
  return (
    <>
      <h1>Render Events Example</h1>
      <p>Click the button to see the event in action.</p>
      <Button onClick={() => alert('Button clicked!')}>Click Me</Button>
    </>
  )
}

export default App
