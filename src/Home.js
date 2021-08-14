import React from 'react'

import { IconButton, makeStyles, Typography, AppBar, Toolbar, Button } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'

const useStyles = makeStyles((theme) => ({
   root: {
      height: '100vh',
   },
   appBar: {
      boxShadow: 'none',
   },
   grow: {
      flexGrow: 1
   },
}))

export default function Home(){
   const classes = useStyles();

   return(
      <div className={classes.root}>
         <AppBar color='inherit' className={classes.appBar}>
            <Toolbar>
               <IconButton
                  edge='start'
                  className={classes.menuButton}
                  colors='inherit'
                  aria-label='menu'
               >
                  <MenuIcon />
               </IconButton>
               <div className={classes.grow}/>
               <Button variant='outlined' color='secondary'>Fazer login</Button>
            </Toolbar>
         </AppBar>
      </div>
   )
}