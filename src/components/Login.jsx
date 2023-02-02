
import { Avatar, Button, Grid, Paper, TextField } from '@mui/material'
import { borderRadius } from '@mui/system'
import { Link } from 'react-router-dom'
import React from 'react'
import { useState } from 'react'



const Login = () => {

  const paperStyle = {backgroundColor: "rgb(34 34 34)", padding :20, height:'70vh', width:"50vw", margin:"20px auto", borderRadius:"50px"}
  const avatarStyle={backgroundColor: '#00ff00', color:'black'}
  const innerGridStyle={backgroundColor: "rgb(34 34 34)"}

  const [isValid, setValid] = useState(false);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const defaultCredentials = {userName:"admin", password:"admin"}

  const textFieldStyle={
    backgroundColor: "white",
    margin:"20px auto",
    borderRadius:"20px",
    borderColor:"green"
  }
  const textFieldInputProps={
    style:{
      borderRadius:"20px",
      borderColor:"green",
      backgroundColor:"white"
    }
  }

  function handelSubmit(){
    if(userName === defaultCredentials.userName && password === defaultCredentials.password){
      setValid(true);
    }
    else{
      alert("This App is in development stage \n username:admin \n password:admin")
    }
  }
  return (
    <div>
      <Grid>
        <Paper elevation={10} style={paperStyle}>
          <div style={{fontFamily:'Verdana, sans-serif', color:'white', textAlign:"center", justifyContent:"center", fontSize:"10"}}>
        <h1 >Sign-in</h1>
        </div>
        <hr/>
          <Grid align='center' style={innerGridStyle}>
          <Avatar style={avatarStyle}>
            <img src="https://www.pngarts.com/files/11/Avatar-PNG-Transparent-Image.png"
                 style={{width:"50px"}}></img>
          </Avatar>
          <TextField label="UserName" placeholder='Enter UserName' fullWidth required 
          style={textFieldStyle}
          InputProps={textFieldInputProps}
          onChange= {(e)=> setUserName(e.target.value)}
          />

          <TextField label="Password" placeholder='Enter Password' type='password' fullWidth required
          style={textFieldStyle}
          InputProps={textFieldInputProps}
          onChange= {(e)=> setPassword(e.target.value)}
          />

          <Button style={{backgroundColor:'rgb(128, 128, 128)', color:'white'}} onClick={handelSubmit}><Link to={isValid?"/main":"/"}>Submit</Link></Button>
          </Grid>
          <hr/>
          
        </Paper>
      </Grid>
    </div>
  )
}

export default Login
