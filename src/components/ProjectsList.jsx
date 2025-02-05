import { Card, CardContent } from '@mui/material';
import TimeTracker from './TimeTracker';

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
  );
}
