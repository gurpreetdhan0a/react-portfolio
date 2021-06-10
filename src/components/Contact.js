import React from 'react';
import { TextField, Button, Paper } from '@material-ui/core';
const Contact = () => {
    return (
        <div id="contact" className="portfolio">
            <h1>Contact</h1>
            <div className="color">
            <Paper>
            <form name="contact" netlify>
            <TextField required name="name" variant="outlined" label="Name" fullWidth type="text"/>

            <TextField style={{marginTop: "10px", marginBottom: "10px"}} required name="email" type="email" variant="outlined" label="Email" fullWidth value=""/>

            <TextField style={{marginTop: "10px"}} required name="message" variant="outlined" label="Message" fullWidth type="text"/>

            <Button style={{marginTop: "10px", }}variant="contained" color="secondary" size="large" type="submit" fullWidth >Submit</Button>
            </form>
            </Paper>
        </div>
        </div>
    );
};

export default Contact;