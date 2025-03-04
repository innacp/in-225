import { Button, Container, TextField } from '@mui/material';
import { display } from '@mui/system';

export default function ProjectInputs({ project, setProject, error, handleSubmit }) {
  const { name, description } = project;

  return (

    <Container maxWidth="sm">
      {/* <h1 sx={{ textColor: '#000000' }}>Create new project</h1> */}
      <form
        className="form-add-project"
        onSubmit={handleSubmit}
      >
        <TextField

          id="project-name"
          label="Назва проекту"
          variant="outlined"
          value={name}
          onChange={e => setProject(prev => ({
            ...prev,
            name: e.target.value,
          }))}
          error={error && !name.trim()}
          helperText={error && !name.trim() ? 'Project name is required' : ''}
          sx={{
            '& .MuiInputBase-root': {
              padding: '5px',
              maxWidth: '300px',
            },
            '& .MuiOutlinedInput-input': {
              padding: '3px',
              top: '3',
            },
            '& .MuiInputLabel-root': {
              fontSize: '12px',
            },
          }}
        />
        <TextField
          id="project-description"
          label="Додайте опис"
          variant="outlined"
          value={description}
          onChange={e => setProject(prev => ({
            ...prev,
            description: e.target.value,
          }))}
          error={error && !description.trim()}
          helperText={error && !description.trim() ? 'Project description is required' : ''}
          sx={{
            '& .MuiInputBase-root': {
              padding: '5px',
              maxWidth: '300px',
            },
            '& .MuiOutlinedInput-input': {
              padding: '3px',
              top: '3',
            },
            '& .MuiInputLabel-root': {
              fontSize: '12px',
            },
          }}
        />
        <Button
          type="submit"
          variant="outlined"
          sx={{
            maxWidth: '100px',
            fontSize: '0.7rem',
            margin: '0 auto',
          }}
        >
          Створити
        </Button>
      </form>
    </Container>
  );
}
