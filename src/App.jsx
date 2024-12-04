import { Button, Card, CardContent, Container, TextField } from '@mui/material'
import { useState } from 'react'
import './App.css'

function App() {
  const [inputValue, setInputValue] = useState('')
  const [projectName, setprojectName] = useState('')

  const handleInputChange = (event) => {
    setInputValue(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setprojectName(inputValue)
    setInputValue('')
  }

  return (
    <main>
      <Container maxWidth="sm">
        <form class="form-add-prject" onSubmit={handleSubmit}>
          <TextField
            id="standard-basic"
            label="Name your project"
            variant="outlined"
            value={inputValue}
            onChange={handleInputChange}
          />
          <Button type="submit" variant="outlined">
            Submit
          </Button>
        </form>
      </Container>
      <Container>
        <Card variant="outlined" sx={{ maxWidth: 275 }}>
          <CardContent>
            { projectName }
          </CardContent>
        </Card>
      </Container>
    </main>
  )
}

export default App
