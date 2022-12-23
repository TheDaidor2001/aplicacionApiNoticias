import Container from "@mui/material/Container"
import Typography  from "@mui/material/Typography"
import Grid  from "@mui/material/Grid"
import { Formulario } from "./components/Formulario"
import { NoticiasProvider } from "./context/NoticiasProvider"
import { ListadoNoticias } from "./components/ListadoNoticias"

function App() {


  return (
    <NoticiasProvider>
      <Container>
        <header>
          <Typography align="center" marginY={5} component="h1" variant="h3">
            Buscador de noticias
          </Typography>
        </header>
        <Grid 
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs={12} md={6} lg={4}>
            <Formulario />
          </Grid>
        </Grid>


        <ListadoNoticias />

      </Container>
    </NoticiasProvider>
  )
}

export default App
