import React from 'react'
import { Table, TableBody, TableHead, TableContainer, Paper, TableRow, TableCell } from '@mui/material'
import Employee from './Employee'
import { useState } from 'react'



function DataTable(employeeList) {

  function getEmployee(employee){
    return (
      <Employee id={employee.id} empName={employee.name} empPost={employee.post} time={time} toDoList={employee.toDo}/>
    )
  }

  const [time, setTime] = useState(new Date)

  React.useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
  
    return () => clearInterval(interval);
  }, []);
  
  
  return (

    <div>
     <h4>{time.toTimeString()}</h4>
      <TableContainer style={{backgroundColor:"rgba(255,255,255,0.9)"}} component={Paper}>
      <Table>
      <TableHead>
        <TableRow>
          
          <TableCell align='center'>ID</TableCell>
          <TableCell align='center'>Name</TableCell>
          <TableCell align='center'>Designation</TableCell>
          <TableCell align='center'>Attendence</TableCell>
          <TableCell align='center'>Check-in Time</TableCell>
          <TableCell align='center'>To Do</TableCell>
          
        </TableRow>
      </TableHead>
      <TableBody>

      { employeeList.employeeList.map((employee) => (
        getEmployee(employee)
      ) )
      
      }

      </TableBody>
     </Table>
    </TableContainer>
    </div>
  )
}

export default DataTable
