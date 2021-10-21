import { Button, Grid, TextField } from '@material-ui/core'
import React, {useState} from 'react'

const EmployeeHooks = () => {
    const[name,setName]=useState("")
    const[eid,setEid]=useState("")
    const[des,setDes]=useState("")
    const[addr,setAddr]=useState("")
    const[sala,setSala]=useState("")
    const[mob,setMob]=useState("")
    const[email,setEmail]=useState("")
    const readValues=()=>{
        console.log(name)
        console.log(eid)
        console.log(des)
        console.log(addr)
        console.log(sala)
        console.log(mob)
        console.log(email)
    }

    return (
        <div>
            <Grid container style={{padding:20}} xs={12} sm={12} md={12} lg={12} xl={12}>
                <Grid item style={{padding:20}} xs={12} sm={12} md={12} lg={12} xl={12}>
                    <h1>EMPLOYEE APP</h1>
                    <TextField
                    label="Employee name"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    name="name"
                    value={name}
                    onChange={(event)=>{setName(event.target.value)}}
                    />
                    <TextField
                    label="Employee id"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    name="eid"
                    value={eid}
                    onChange={(event)=>{setEid(event.target.value)}}
                    />
                    <TextField
                    label="Designation"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    name="des"
                    value={des}
                    onChange={(event)=>{setDes(event.target.value)}}
                    />
                    <TextField
                    label="Address"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    name="addr"
                    value={addr}
                    onChange={(event)=>{setAddr(event.target.value)}}
                    />
                    <TextField
                    label="Salary"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    name="sala"
                    value={sala}
                    onChange={(event)=>{setSala(event.target.value)}}
                    
                    />
                    <TextField
                    label="Mobileno"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    name="mob"
                    value={mob}
                    onChange={(event)=>{setMob(event.target.value)}}                    />
                    <TextField
                    label="Emailid"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    name="email"
                    value={email}
                    onChange={(event)=>{
                        setEmail(event.target.value)
                    }}
                    />

                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <Button
                    onClick={readValues}
                    variant="contained"
                    color="primary"
                    fullWidth
                    margin="normal"
                    >SUBMIT</Button>

                </Grid>

            </Grid>
            
        </div>
    )
}

export default EmployeeHooks
