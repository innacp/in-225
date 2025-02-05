// import { Button, Card, CardContent, Container, TextField } from '@mui/material';
import { useState } from 'react';
import CreateProjectForm from './components/CreateProjectForm';
import ProjectsList from './components/ProjectsList'
import { generateUniqueId } from './utils/utils'
import './styles/App.css'

const initialProject = {
  id: '',
  name: '',
  description: '',
};

function App() {
  const [error, setError] = useState(false)
  const [projects, setProjects] = useState([]);
  const [project, setProject] = useState(initialProject)

  const { name, description } = project;

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!name.trim() || !description.trim()) {
      setError(true)
      return;
    }
    setError(false)

    setProjects(prev => (
      [...prev, {
        ...project,
        id: generateUniqueId(),
      }]
    ));

    setProject(initialProject)
  };

  return (
    <>
      <CreateProjectForm
        project={project}
        setProject={setProject}
        error={error}
        handleSubmit={handleSubmit}
      />
      <ProjectsList projects={projects} />
    </>
  )
}

export default App
