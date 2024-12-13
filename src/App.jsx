import { Button, Card, CardContent, Container, TextField } from '@mui/material'
import { useState } from 'react'
import './App.css'

function App() {
  const [inputName, setInputName] = useState('')
  const [inputDescription, setInputDescription] = useState('')
  const [projectName, setProjectName] = useState('')
  const [projectDescription, setProjectDescription] = useState('')
  const [error, setError] = useState(false)

  const handleInputChange = (event) => {
    setInputName(event.target.value)
  }

  const handleInputDescription = (event) => {
    setInputDescription(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!inputName.trim() || !inputDescription.trim()) {
      setError(true)
      return
    }
    setError(false)
    setProjectName(inputName)
    setProjectDescription(inputDescription)
    setInputName('')
    setInputDescription('')
  }

  return (
    <main>
      <Container maxWidth="sm">
        <form className="form-add-project" onSubmit={handleSubmit}>
          <TextField
            id="standard-basic"
            label="Name your project"
            variant="outlined"
            value={inputName}
            onChange={handleInputChange}
            error={error && !inputName.trim()}
            helperText={error && !inputName.trim() ? 'Project name is required' : ''}
          />
          <TextField
            id="standard-basic"
            label="Add description"
            variant="outlined"
            value={inputDescription}
            onChange={handleInputDescription}
            error={error && !inputDescription.trim()}
            helperText={error && !inputDescription.trim() ? 'Project description is required' : ''}
          />
          <Button type="submit" variant="outlined">
            Submit
          </Button>
        </form>
      </Container>
      <Container>
        { projectName && projectDescription
          ? (
              <Card variant="outlined" sx={{ maxWidth: 275 }}>
                <CardContent>
                  <h2>{projectName}</h2>
                  <h3>{projectDescription}</h3>
                </CardContent>
              </Card>
            )
          : 'No projects' }
      </Container>
    </main>
  )
}

export default App
