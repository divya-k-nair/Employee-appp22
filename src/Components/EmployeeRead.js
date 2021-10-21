import { Button, Grid, TextField } from '@material-ui/core'
import React from 'react'
import { useForm } from './formState'

const EmployeeRead = () => {
    const[value,onHandleChange]=useForm(
        {
           Employeename:"", 
           Employeeid:"",
           Designation:"",
           Salary:"",
           Address:"",
           Emailid:""
        }
    )
    const readValues=()=>{
        console.log(value)
    }
    return (
        <div>
            <Grid container xs={12} sm={12} md={12} lg={12} xl={12}>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <h1>EMPLOYEE APP</h1>
                    <TextField
                    label="Employee name"
                    margin="normal"
                    variant="outlined"
                    value={value.Employeename}
                    name="Employeename"
                    fullWidth
                    onChange={onHandleChange}
                    />
                    <TextField
                    label="Employee id"
                    variant="outlined"
                    margin="normal"
                    value={value.Employeeid}
                    name="Employeeid"
                    fullWidth
                    onChange={onHandleChange}
                    />
                    <TextField
                    label="Designation"
                    variant="outlined"
                    margin="normal"
                    value={value.Designation}
                    name="Designation"
                    fullWidth
                    onChange={onHandleChange}
                    />
                    <TextField
                    label="Salary"
                    variant="outlined"
                    margin="normal"
                    value={value.Salary}
                    name="Salary"
                    fullWidth
                    onChange={onHandleChange}
                    />
                    <TextField
                    label="Address"
                    variant="outlined"
                    margin="normal"
                    value={value.Address}
                    name="Address"
                    fullWidth
                    onChange={onHandleChange}
                    />
                    <TextField
                    label="Emailid"
                    variant="outlined"
                    margin="normal"
                    value={value.Emailid}
                    name="Emailid"
                    fullWidth
                    onChange={onHandleChange}
                    />
                    <Button
                    onClick={readValues}
                    variant="contained"
                    fullWidth
                    color="secondary"
                    >SUBMIT</Button>

                </Grid>

            </Grid>
            
        </div>
    )
}

export default EmployeeRead
