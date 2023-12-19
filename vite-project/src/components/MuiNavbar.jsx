import React from 'react'
import { AppBar, Toolbar, IconButton, Typography, Stack, Button } from '@mui/material'
import WaterDropSharpIcon from '@mui/icons-material/WaterDropSharp';

export default function MuiNavbar() {
  return (
    <AppBar postion='static' sx={{height: '6%'}}> 
        <Toolbar sx={{height: '100%', width: '100%'}}>
            <IconButton size='large' edge='start' color='inherit' aria-label='logo'>
                <WaterDropSharpIcon/> 
            </IconButton>
            <Typography variant='h6' component='div' sx={{flexGrow: 1}}>
                Heng Yang
            </Typography>
            <Stack direction='row' spacing={2}>
                <Button color='secondary' variant='contained'>About Me</Button>
                <Button color='secondary' variant='contained'>Projects</Button>
                <Button color='secondary'variant='contained'>Get In Touch</Button>
            </Stack>
        </Toolbar>
    </AppBar>
  )
}
