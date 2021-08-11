import React from 'react'
import { ThemeProvider, createMuiTheme } from '@material-ui/core'

function App() {
   const theme = createMuiTheme({
      status: {
         danger: orange[500],
      },
   })

   return (
      <ThemeProvider theme={theme}>
         <div className="App">
            
         </div>
      </ThemeProvider>
   );
}

export default App;