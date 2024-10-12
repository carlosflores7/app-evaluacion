import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Container, Box, Grid } from '@mui/material';

function TeacherDashboard() {
  return (
    <div className="teacher-dashboard">
      {/* Encabezado reutilizado */}
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/main" style={{ color: 'inherit', textDecoration: 'none' }}>
              Plataforma Educativa
            </Link>
          </Typography>
          <Button color="inherit" component={Link} to="/teacher-dashboard">
            Panel del Docente
          </Button>
          <Button color="inherit" component={Link} to="/student-dashboard">
            Panel del Estudiante
          </Button>
          <Button color="inherit" component={Link} to="/evaluations">
            Evaluaciones
          </Button>
          <Button color="inherit" component={Link} to="/reports">
            Reportes
          </Button>
        </Toolbar>
      </AppBar>

      {/* Contenido principal del dashboard del docente */}
      <Container>
        <Box sx={{ mt: 5 }}>
          <Grid container spacing={2} justifyContent="center">
            <Grid item xs={12}>
              <Typography variant="h4" component="h2" align="center">
                Panel del Docente
              </Typography>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                color="primary"
                component={Link}
                to="/teacher-dashboard/create-evaluation"
              >
                Crear Evaluación
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                color="primary"
                component={Link}
                to="/teacher-dashboard/view-reports"
              >
                Ver Reportes
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
}

export default TeacherDashboard;
