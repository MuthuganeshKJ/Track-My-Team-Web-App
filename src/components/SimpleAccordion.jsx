import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { Button, Checkbox, List, ListItemButton, ListItemText, TextField } from '@mui/material';
import { useState } from 'react';


export default function SimpleAccordion({toDoList, setExpanded}) {



  return (
    <div>
      <Accordion 
      defaultExpanded={setExpanded}
      style={{width:"200px", margin:"20px"}}>
        <AccordionSummary
          
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>To Do List</Typography>
        </AccordionSummary>
        <AccordionDetails>
          
          <List>
            {
              toDoList.map((value)=>(
                <ListItemButton key = {value}>
                  <ListItemText primary={value}/>
                  <Checkbox/>
                </ListItemButton>
              ))
            }
          </List>
        </AccordionDetails>
      </Accordion>
      
    </div>
  );
}
