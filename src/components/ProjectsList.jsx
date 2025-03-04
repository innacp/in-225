import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import TimeTracker from './TimeTracker';

export default function ProjectsList({ projects }) {
  return (
    <>

      {projects.length > 0
        ? (

            <div
              className="list-container"
            >
              {projects.map(({ id, name, description }) => (
                <Card
                  key={id}
                  variant="outlined"
                  sx={{
                    maxWidth: 300,
                    margin: '15px',
                    padding: '0px',
                  }}
                >
                  <CardContent sx={{
                    'display': 'flex',
                    'justifyContent': 'space-between',
                    'padding': '8px',
                    '&:last-child': { paddingBottom: '0px' },
                    '& h2': {
                      marginTop: '2px',
                      textAlign: 'left',
                      fontSize: '0.8rem',
                      marginBottom: '2px',
                    },
                    '& p': {
                      textAlign: 'left',
                      fontSize: '0.8rem',
                      marginTop: '0',
                    },
                  }}
                  >
                    <div className="task-text">
                      <h2>{name}</h2>
                      <p>{description}</p>
                    </div>
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
