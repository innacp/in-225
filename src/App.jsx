import { Button, Card, CardContent, Container, TextField } from '@mui/material'
import { useState } from 'react'
import './App.css'

function App() {
  const [inputValue, setInputValue] = useState('')
  const [inputValue2, setInputValue2] = useState('')
  const [projectName, setProjectName] = useState('')
  const [projectDescription, setProjectDescription] = useState('')
  // const [show, setShow] = useState(false)

  const handleInputChange = (event) => {
    setInputValue(event.target.value)
  }
  
  const handleInputChange2 = (event) => {
    setInputValue2(event.target.value)    
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setProjectName(inputValue)
    setProjectDescription(inputValue2)
    setInputValue('')
    setInputValue2('')
  }

  return (
    <main>
      <Container maxWidth="sm">
        <form className="form-add-project" onSubmit={handleSubmit}>
          <TextField
            id="standard-basic"
            label="Name your project"
            variant="outlined"
            value={inputValue}
            onChange={handleInputChange}
          />
          <TextField
            id="standard-basic"
            label="Add description"
            variant="outlined"
            value={inputValue2}
            onChange={handleInputChange2}
          />
          <Button type="submit" variant="outlined">
            Submit
          </Button>
        </form>
      </Container>
      <Container>
        {(projectName  && projectDescription) &&  (
        <Card variant="outlined" sx={{ maxWidth: 275 }}>
          <CardContent>
            {projectName + " " + projectDescription}            
          </CardContent>
        </Card>
        )}
      </Container>
    </main>
  )
}

export default App
