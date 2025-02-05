<<<<<<< HEAD
import { Card, CardContent } from '@mui/material'
import TimeTracker from './TimeTracker';
=======
import { Card, CardContent } from '@mui/material';
>>>>>>> 71525e23e0cc06e3ed1b8b3cedd8f44ef86cc3f7

export default function ProjectsList({ projects }) {
  return (
    <>

      {projects.length > 0
        ? (

            <div className="list-container">
              {projects.map(({ id, name, description }) => (
                <Card key={id} variant="outlined" sx={{ maxWidth: 275, margin: '15px' }}>
                  <CardContent>
                    <h2>{name}</h2>
                    <h3>{description}</h3>
                    <TimeTracker />
                  </CardContent>
                </Card>
              ))}
            </div>

          )
        : 'No Projects'}
    </>
  );
}
