import { useState } from 'react'
// import {MuiTheme} from './config/MuiTheme'
import { ThemeProvider } from '@mui/material';
import MuiNavbar from './components/MuiNavbar'
// import Background from './components/Background'
import { createTheme } from '@mui/material/styles';

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


function App() {
  const [count, setCount] = useState(0)

  return (
    <ThemeProvider theme={theme}>
      <MuiNavbar>Hello world</MuiNavbar>
      {/* <Background></Background> */}
    </ThemeProvider>
  )
}

export default App
