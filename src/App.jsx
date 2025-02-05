import { useState } from 'react';
import CreateProjectForm from './components/CreateProjectForm';
import ProjectsList from './components/ProjectsList';
import TimeTracker from './components/TimeTracker';
import { generateUniqueId } from './utils/utils';
import './styles/App.css';

const initialProject = {
  id: '',
  name: '',
  description: '',
  ahah: '',
};

function App() {
  const [error, setError] = useState(false);
  const [error, setError] = useState(false);
  const [projects, setProjects] = useState([]);
  const [project, setProject] = useState(initialProject);
  const [project, setProject] = useState(initialProject);

  const { name, description } = project;

  const handleSubmit = (event) => {
    event.preventDefault();
    event.preventDefault();
    if (!name.trim() || !description.trim()) {
      setError(true);
      setError(true);
      return;
    }
    setError(false);
    setError(false);

    setProjects(prev => (
      [...prev, {
        ...project,
        id: generateUniqueId(),
      }]
    ));

    setProject(initialProject);
    setProject(initialProject);
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
  );
  );
}

export default App;
export default App;
