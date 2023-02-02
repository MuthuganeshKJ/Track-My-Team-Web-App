import { Checkbox, ListItem, ListItemText, Collapse, ListItemButton, ListItemIcon, Typography, TableRow, TableCell} from '@mui/material'
import React from 'react'
import SimpleAccordion from './SimpleAccordion'


const Employee = ({id, empName, empPost, time, toDoList}) => {
  
  const [presentFlag, setPresent] = React.useState(false)

  const [inTime, setInTime] = React.useState("")
  function HandleClick(){
    setPresent(!presentFlag)
    setInTime(time.toString())
  }
  return (
    <TableRow>
      <TableCell align='center'>{id}</TableCell>
      <TableCell align='center'>{empName}</TableCell>
      <TableCell align='center'>{empPost}</TableCell>
      <TableCell align='center'>{presentFlag?"present":"absent"}
      <Checkbox onClick={HandleClick}></Checkbox></TableCell>
      <TableCell align='center'>
        <Typography style={{width:"500px", margin:"10px auto"}}>{presentFlag?inTime: ""}</Typography></TableCell>
      <TableCell>   
      <SimpleAccordion toDoList = {toDoList} setExpanded={false}/></TableCell>

      
      
   
    </TableRow>
  )
}

export default Employee
//{presentFlag?inTime: ""}