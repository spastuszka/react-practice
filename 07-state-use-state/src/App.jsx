import { useState } from 'react'
import { Button } from './components/Button.jsx'
function App() {
  const [secretShown, setSecretShown] = useState(false)

  function handleClick() {
    setSecretShown(true)
  }

  return (
    <>
      <h1>Render Events Example</h1>
      <p>Click to show useState in action.</p>
      <Button onClick={handleClick}>Show me a secret</Button>
      {secretShown && <div> Secret info</div>}
    </>
  )
}

export default App
