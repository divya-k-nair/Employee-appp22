import { Button, Grid, TextField, Typography } from '@material-ui/core'
import React from 'react'

export default function Employee() {
    return (
        <Grid container>
            <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
                

            </Grid>
            <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
                <Typography>EMPLOYEE APP</Typography>
                <TextField
                variant="outlined"
                type="text"
                label="Employee id:"
                fullWidth
                margin="normal"
                required
                />
                <TextField
                variant="outlined"
                type="password"
                label="Password"
                fullWidth
                margin="normal"
                required

                />
                <TextField
                variant="outlined"
                label="Employee name"
                fullWidth
                margin="normal"
                required
                />
                <TextField
                variant="outlined"
                label="Designation"
                fullWidth
                margin="normal"
                required
                />
                <TextField
                variant="outlined"
                label="Salary"
                fullWidth
                margin="normal"
                required
                />
                <TextField
                variant="outlined"
                label="Address"
                fullWidth
                margin="normal"
                required
                />
                <TextField
                variant="outlined"
                label="Emailid"
                fullWidth
                margin="normal"
                required
                />
                <Button 
                margin="normal"
                variant="contained"
                color="secondary"
                >SUBMIT</Button>
    
             </Grid>
             <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
 
             </Grid>

        </Grid>
    )
}
