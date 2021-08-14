import React from 'react'
import { ThemeProvider, createMuiTheme } from '@material-ui/core'

import Home from './Home'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
   root: {
      background: 'red',
      height: '100vh'
   }
})

function App() {
   const classes = useStyles();

   const theme = createMuiTheme({
      spacing: 4,
      palette: {
         primary: {
            main: '#f44336'
         }
      }
   })

   return (
      <ThemeProvider theme={theme}>
         <Home /> 
      </ThemeProvider>
   );
}

export default App;