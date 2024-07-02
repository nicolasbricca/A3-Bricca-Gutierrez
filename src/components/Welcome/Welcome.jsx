import { Box, Toolbar, Typography, Grid, Paper } from '@mui/material';
import develop from '../../assets/develop.png'

export default function Welcome() {
  return (
    <>
      <h1 style={{ marginTop: '6rem' }} className='blog-title'>Bienvenido a Bricca Gutierrez's Website!</h1>
      <p>This is a personal website created by Bricca and Gutierrez.</p>

      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
        <Typography  className='blog-title' variant="h4" gutterBottom>
          Proyecto Bricca Gutierrez's
        </Typography>
        <Typography variant="body1" paragraph>
          Bienvenidos a la página del Proyecto Bricca Gutierrez's. Este proyecto tiene como objetivo mejorar la calidad de vida en las ciudades a través de la implementación de tecnologías inteligentes y sostenibles.
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <Paper sx={{ p: 2 }}>
              <img src={develop} alt="Desarrollo de software 1" />
              <Typography variant="h6" gutterBottom>
                <b>Objetivos del Proyecto</b>
              </Typography>
              <Typography variant="body2">
                El Proyecto SmartCity busca integrar soluciones tecnológicas en la gestión urbana, como sistemas de transporte inteligentes, iluminación eficiente y gestión de residuos automatizada. Nuestro objetivo es crear un entorno urbano más eficiente, seguro y sostenible.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper sx={{ p: 2 }}>
              <img src={develop} alt="Desarrollo de software 2" />
              <Typography variant="h6" gutterBottom>
                <b>Equipo del Proyecto</b>
              </Typography>
              <Typography variant="body2">
                Nuestro equipo está compuesto por expertos en ingeniería, urbanismo y sostenibilidad. Contamos con la colaboración de universidades, empresas tecnológicas y gobiernos locales para asegurar el éxito de nuestras iniciativas.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper sx={{ p: 2 }}>
              <img src={develop} alt="Desarrollo de software 3" />
              <Typography variant="h6" gutterBottom>
                <b>Resultados Esperados</b>
              </Typography>

              <Typography variant="body2">
                Esperamos reducir el consumo de energía en un 20%, mejorar la eficiencia del transporte público y disminuir los residuos urbanos en un 15%. Estos resultados contribuirán a una ciudad más habitable y respetuosa con el medio ambiente.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper sx={{ p: 2 }}>
              <img src={develop} alt="Desarrollo de software 4" />
              <Typography variant="h6" gutterBottom>
                <b>Contacto</b>
              </Typography>
              <Typography variant="body2">
                Si deseas más información sobre el Proyecto SmartCity o quieres colaborar con nosotros, por favor, contáctanos a través del correo electrónico smartcity@proyecto.com o llama al (123) 456-7890.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}
