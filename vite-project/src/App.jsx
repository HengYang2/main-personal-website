import { useState } from 'react'
import { Box, ThemeProvider, colors } from '@mui/material';
import MuiNavbar from './components/MuiNavbar'
import { createTheme } from '@mui/material/styles';
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import { Margin } from '@mui/icons-material';

//import pexel images
import pexelsWater from '../public/pexelsWater.jpg'

function App() {
  const [count, setCount] = useState(0)

  const theme = createTheme({
    palette: {
      primary: {
        light: '#757ce8',
        main: '#42ecf2',
        dark: '#002884',
        contrastText: '#fff',
      },
      secondary: {
        light: '#ff7961',
        main: '#f24842',
        dark: '#ba000d',
        contrastText: '#000',
      },
    },
  });


  return (
    <ThemeProvider theme={theme}>
      <Parallax pages={3} style={{ margin: '0%', padding: '0%', position: 'absolute', }}>
        <Box sx={{ width: '100%', height: '100%', background: 'blue', position: 'relative' }}>
          <img src='../public/pexelsWater.jpg' style={{ minWidth: '100%', minHeight: '100%' }} />
        </Box>
        <ParallaxLayer sticky={{ start: 0, end: 3 }}>
          <MuiNavbar />
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.5} factor={1}>
          <Box sx={{ color: 'white', Width: '100%', height: '100%', position: 'relative', bgcolor: '', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', fontSize: '50rem' }}>
            Heng Yang
          </Box>
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={1} factor={1}>
          <Box sx={{ Width: '100%', height: '100%', position: 'relative', bgcolor: '', display: 'flex', flexDirection: 'row', justifyContent: 'center', fontSize: '20rem', paddingTop: '7rem' }}>
            <Box sx={{ minWidth: '90%', height: '100%', position: 'relative', bgcolor: 'white', display: 'flex', flexDirection: 'row', justifyContent: 'center', fontSize: '20rem', paddingTop: '7rem' }}>
              Learn More About Me
            </Box>
          </Box>
        </ParallaxLayer>
        <ParallaxLayer offset={2} speed={1} factor={1} style={{}}>
          <Box sx={{ Width: '100%', height: '100%', position: 'relative', bgcolor: '', display: 'flex', flexDirection: 'row', justifyContent: 'center', fontSize: '20rem', paddingTop: '7rem' }}>
            <Box sx={{ minWidth: '90%', height: '100%', position: 'relative', bgcolor: 'white', display: 'flex', flexDirection: 'row', justifyContent: 'center', fontSize: '20rem', paddingTop: '7rem' }}>
              Projects
            </Box>
          </Box>
        </ParallaxLayer>
      </Parallax>
    </ThemeProvider>
  )
}

export default App



// bgcolor: 'secondary.main' 

{/* <ParallaxLayer sticky={{ start: 0.5, end: 1}}>
<MuiNavbar>Hello world</MuiNavbar>
</ParallaxLayer> */}