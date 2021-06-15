import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Button, Paper } from '@material-ui/core';
const Contact = () => {
    const useStyles = makeStyles((theme) => ({
        multilineColor:{
            color:'white'
        }
    }));
    const classes = useStyles();
    return (
        <div id="contact" className="portfolio">
            <h1>Contact</h1>
            <div className="color width">
            <Paper>
            <form name="contact" method="post" date-netlify="true">
            <TextField required name="name" variant="outlined" label="Name" fullWidth type="text" InputProps={{
            className: classes.multilineColor}}/>

            <TextField style={{color:"white",marginTop: "10px", marginBottom: "10px"}} required name="email" type="email" variant="outlined" label="Email" InputProps={{
            className: classes.multilineColor}} fullWidth/>

            <TextField style={{marginTop: "10px"}} required name="message" variant="outlined" InputProps={{
            className: classes.multilineColor}} label="Message" fullWidth/>

            <Button style={{marginTop: "10px", }}variant="contained" color="secondary" size="large" type="submit" fullWidth >Submit</Button>
            </form>
            </Paper>
        </div>
        </div>
    );
};

export default Contact;