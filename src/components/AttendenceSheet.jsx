import {Paper,  TextField, Button, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Grid, Typography} from '@mui/material';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import DataTable from './DataTable';
import SimpleAccordion from './SimpleAccordion';

const AttendenceSheet = () => {


  const [employeeList, setEmployeeList] = useState([])
   
  const [time, setTime] = React.useState(new Date());

  const [empName, setEmpName] = useState("")

  const [empDesignation, setEmpDesignation] = useState("")

  const [id, setId] = useState(1)

  const textFieldStyle = {margin:"20px", width:"100px"}

  const [removeId, setRemoveId] = useState("")

  const [toDoList, setToDoList] = useState([])

  const [toDo, setToDo] = useState("")

  React.useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  
  function addEmployee(){
    setEmployeeList([...employeeList, {"id": id, "name": empName, "post":empDesignation, "toDo":toDoList}])
    setId(id=> id+1)
    setToDoList([])
    setEmpName("")
    setEmpDesignation("")
  }
  

  function removeEmployee(removeId){
    
   
    
    const newList = employeeList.filter((employee)=>{
      
      return (employee.id.toLocaleString() !== removeId)
    });
    setEmployeeList(newList)
    setRemoveId("");
  }

  function addToDo(){
    if(toDo !== ""){
    setToDoList([...toDoList, toDo])
    setToDo("")
    setValue("")
    }
    else{
      alert("No To Do Added")
    }
  }

  

  return (
    <>
    <Link to="/">Log Out</Link>
    <Grid container="paper" style={{justifyContent:"center"}}>
    <div style={{margin:"20px"}}>   
    
    <div style={{display:"flex"}}>
    <Grid  component={Paper} style={{justifyContent:"center", display:"flex", height:"15vh"}}>
    <Button 
    style={{width:"30px", backgroundColor:"white", margin:"30px"}}
    onClick={addEmployee}>Add</Button>
    
    <TextField  
    label="Employee Name"
    style={textFieldStyle}
    value={empName}
    placeholder='Enter Employee Name'
    onChange={(e)=>setEmpName(e.target.value)}
    />
    
    <TextField  
    label="Employee Designation"
    style={textFieldStyle}
    placeholder='Enter Employee Designation'
    value={empDesignation}
    onChange={(e)=>setEmpDesignation(e.target.value)}/>

    <Button onClick={addToDo}>Add To Do</Button>

    <TextField style={textFieldStyle} 
      lable="To Do" 
      placeholder='Add To Do'
      value={toDo}
      onChange={(e) => setToDo(e.target.value)}/>

    

    <div style={{backgroundColor:"red", height:"15vh"}}>
    <Button 
    style={{width:"100px", backgroundColor:"white", margin:"15px"}}
    onClick={()=> removeEmployee(removeId)}>Remove Employee</Button>
    {/* onClick={removeEmployee(1)} */}

    <TextField style={textFieldStyle} 
      lable="To Do" 
      placeholder='Enter ID'
      value={removeId}
      onChange={(e) => setRemoveId(e.target.value)}/>

    </div>   
    </Grid>

    {/* <SimpleAccordion toDoList={toDoList} setExpanded={true}></SimpleAccordion> */}
    </div>


    
    </div>
    
    <DataTable employeeList={employeeList}/>
      
      </Grid>
    
    </>  
    
  )
  
}

export default AttendenceSheet
