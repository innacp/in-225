import { useState } from 'react'
import './App.css'

function App() {
  const [projectName, setProjectName] = useState('')

  function handleInputChange(event) {
    setProjectName(event.target.value)
  }

  function handleSubmit(event) {
    event.preventDefault()
  }

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <TextField
          fieldName="projectName"
          value={projectName}
          onChange={handleInputChange}
        />
        <Button type="submit">Submit</Button>
      </form>
      <div>
        Project Name:
        {projectName}
      </div>
    </main>
  )
}

export default App
