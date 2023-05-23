//rafce

import React from 'react'
import { TextField, Typography } from '@mui/material';
const Frst = () =>{
    return(
        <div className="App">
      <h1>hehee</h1>
      <input placeholder='type'></input>
      <br/>
      <button>ok</button>
      <Typography variant='h1'>suii</Typography>
      <br/><br/>
      <TextField variant='outlined' label="name"/>
      <br/><br/>
      <TextField variant='filled' label="eee"/>
      <br/>
      <TextField variant='standard' label="yopp"/>
    </div>
    )
}
export default Frst