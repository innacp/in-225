import { Card, CardContent } from '@mui/material';
import TimeTracker from './TimeTracker';

export default function ProjectsList({ projects }) {
  return (
    <>

      {projects.length > 0
        ? (

            <div className="list-container">
              {projects.map(({ id, name, description }) => (
                <Card key={id} variant="outlined" sx={{ maxWidth: 300, margin: '15px' }}>
                  <CardContent sx={{ '& h2': { fontSize: '1.2rem' }, '& p': { fontSize: '1rem' } }}>
                    <h2>{name}</h2>
                    <p>{description}</p>
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
