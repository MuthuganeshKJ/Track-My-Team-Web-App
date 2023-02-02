import { Typography } from '@mui/material'
import React from 'react'

const Header = () => {

  const headerStyle = {textAlign:"center", height:"10vh",
   fontSize:"30px",
   fontFamily:"Geneva, Verdana, sans-serif",
   paddingBottom:"10px",
 }
  return (
    <div>
      <Typography style = {headerStyle}>TRACK MY TEAM WEB APP 
      
      </Typography>
      
    </div>
  )
}

export default Header
