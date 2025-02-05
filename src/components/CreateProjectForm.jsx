import { Button, Container, TextField } from '@mui/material'

export default function ProjectInputs({ project, setProject, error, handleSubmit }) {
  const { name, description } = project

  return (

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
  )

}
