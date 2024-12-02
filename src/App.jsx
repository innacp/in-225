import { useState } from 'react'
import Box from './Box'
import Button from './Button'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Box></Box>
      <Button></Button>
    </div>
  )
}

export default App
