import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'

const StateBasics = () => {
    var [pname,setPname] = useState("Mm");
    const changeName = () =>{
        console.log("Clicked");
        setPname("U");
    }
  return (
    <div><Typography>hello {pname}</Typography>
    <Button variant='contained' onClick={changeName}>Change</Button>
    </div>

  )
}

export default StateBasics