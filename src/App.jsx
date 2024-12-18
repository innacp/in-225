import { Button, Card, CardContent, Container, TextField } from '@mui/material';
import { useState } from 'react';
import './App.css';

const initialProject = {
  id: '',
  name: '',
  description: '',
};

// TODO: replace to unitl or helpers folder
function generateUniqueId() {
  const timestamp = Date.now().toString(36); 
  const randomNum = Math.random().toString(36).substring(2, 10); 
  return `${timestamp}-${randomNum}`; 
}

function App() {
  const [error, setError] = useState(false)
  const [projects, setProjects] = useState([]);
  const [project, setProject] = useState(initialProject)

  const { name, description } = project;

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!name.trim() || !description.trim()) {
      setError(true)
      return
    }
    setError(false)

    setProjects(prev => (
      [...prev, {
        ...project,
        id: generateUniqueId(),
      }]
    ));

    setProject(initialProject)
  }

  return (
    <main>
      <Container maxWidth="sm">
        <form className="form-add-project" onSubmit={handleSubmit}>
          <TextField
            id="project-name"
            label="Name your project"
            variant="outlined"
            value={name}
            onChange={e => setProject(prev => ({ ...prev, name: e.target.value }))}
            error={error && !name.trim()}
            helperText={error && !name.trim() ? 'Project name is required' : ''}
          />
          <TextField
            id="project-description"
            label="Add description"
            variant="outlined"
            value={description}
            onChange={e => setProject(prev => ({ ...prev, description: e.target.value }))}
            error={error && !description.trim()}
            helperText={error && !description.trim() ? 'Project description is required' : ''}
          />
          <Button type="submit" variant="outlined">
            Submit
          </Button>
        </form>
      </Container>
      <Container>

        {/* TODO */}
        {/* <ProjectsList  projects={projects}/> */}

        {projects.length > 0
          ? (
              <>
                {projects.map(({ id, name, description }) => (
                  <Card key={id} variant="outlined" sx={{ maxWidth: 275 }}>
                    <CardContent>
                      <h2>{name}</h2>
                      <h3>{description}</h3>
                    </CardContent>
                  </Card>
                ))}
              </>
            )
          : 'No Projects'}
        {/* { projectName && projectDescription
          ? (
              <Card variant="outlined" sx={{ maxWidth: 275 }}>
                <CardContent>
                  <h2>{projectName}</h2>
                  <h3>{projectDescription}</h3>
                </CardContent>
              </Card>
            )
          : 'No projects' } */}
      </Container>
    </main>
  )
}

export default App
