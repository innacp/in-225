import { Card, CardContent } from '@mui/material'

export default function ProjectsList({ projects }) {
  return (
    <>
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
    </>
  )

}
