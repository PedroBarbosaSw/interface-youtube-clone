import React from 'react'

import { IconButton, makeStyles, Typography, AppBar, Toolbar, Button } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import AccountCircle from '@material-ui/icons/AccountCircle'

import VideoCall from '@material-ui/icons/VideoCall'
import MoreVert from '@material-ui/icons/MoreVert'
import Apps from '@material-ui/icons/Apps'

const useStyles = makeStyles((theme) => ({
   root: {
      height: '100vh',
   },
   appBar: {
      boxShadow: 'none',
   },
   menuIcon: {
      paddingRight: theme.spacing(5),
      paddingLeft: theme.spacing(6),
   },
   icons: {
      paddingRight: theme.spacing(5),
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
                  className={classes.menuIcon}
                  colors='inherit'
                  aria-label='menu'
               >
                  <MenuIcon />
               </IconButton>

               <div className={classes.grow}/>

               <IconButton className={classes.icons} colors='inherit'>
                  <VideoCall />
               </IconButton>
               <IconButton className={classes.icons} colors='inherit'>
                  <Apps />
               </IconButton>
               <IconButton className={classes.icons} colors='inherit'>
                  <MoreVert />
               </IconButton>
               <Button startIcon={<AccountCircle />} variant='outlined' color='secondary'>Fazer login</Button>
            </Toolbar>
         </AppBar>
      </div>
   )
}