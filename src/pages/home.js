import { Box, Grid2 } from '@mui/material';
import React from 'react'
import { useNavigate } from 'react-router-dom'
import welcomelogo from './../assets/images/welcome.png'
import website from './../assets/images/website.png';
import logo from './../assets/images/logoImg.png'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
import LoginIcon  from '@mui/icons-material/Login';

const Home = () => {

  var navigate = useNavigate();


  function onClickItem(){
    navigate("/career")
  }

  return (
    <div >
        <Grid2>
            <AppBar position="static"  style={{backgroundColor:"#9F63FF"}} >
                <Toolbar color={'#9F63FF'} >
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        <img src={logo}  alt='welcome' height={60}/>  
                    </Typography>
                    <Button color="inherit">
                        Login
                        <LoginIcon />
                    </Button>
                </Toolbar>
            </AppBar>
        </Grid2>

        <Grid2 size={12} container style={{margin:"20px"}}>
            <Grid2 alignItems={'center'} justifyContent={'center'} color={'#9F63FF'} container size={8}>
                <p style={{fontSize:"3rem"}}>
                Your goals are our mission. Let's build together...!!!
                </p>
            </Grid2>

            <Grid2 alignItems={'center'} justifyContent={'center'} color={'#9F63FF'} container size={4}>
                <Grid2 size={1.5}>
                    <img src={welcomelogo}  alt='welcome' height={200}/>  
                </Grid2>
                <Grid2 size={10} >
                    <p style={{fontSize:"1.5rem"}}> Innovation By Presence </p>
                    <p>Build By Quality</p>
                </Grid2>
            </Grid2>
        </Grid2>

        <Grid2  alignItems={'center'} color={'#9F63FF'} container size={12}>
            <Grid2 size={12}  justifyContent={'center'} container>
                <span style={{fontSize:"1.5rem",fontWeight:"bold"}}> Our </span>
                <span style={{fontSize:"1.5rem",color:"black",fontWeight:"bold"}}> Products </span>
            </Grid2>
            <Grid2 size={12}  justifyContent={'center'} container marginTop={'1.5rem'}>
                <Grid2 size={2}>
                    <Box border={4}>
                        <img src={website} alt='Website' width={200}/>
                    </Box>
                </Grid2>
            </Grid2>
        </Grid2>
    </div>
  )
}

export default Home