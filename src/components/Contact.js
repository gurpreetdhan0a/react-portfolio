import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Button, Paper } from '@material-ui/core';

const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
  };

const Contact = () => {
    const useStyles = makeStyles((theme) => ({
        multilineColor:{
            color:'white'
        }
    }));

    const [state, setState] = useState({name:'', email:'', message:''})
    const classes = useStyles();

    const handleSubmit = (e) => {
        fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: encode({ "form-name": "contact", ...state })
        })
          .then(() => alert("Success!"))
          .catch(error => alert(error));
  
        e.preventDefault();
      };

    const handleChange = (e) => setState({ [e.target.name]: e.target.value });

    return (
        <div id="contact" className="portfolio">
            <h1>Contact</h1>
            <div className="color width">
            <Paper>
            <form onSubmit={handleSubmit}>
            <TextField required name="name" variant="outlined" label="Name" fullWidth value={state.name} onChange={handleChange} type="text" InputProps={{
            className: classes.multilineColor}}/>

            <TextField style={{color:"white",marginTop: "10px", marginBottom: "10px"}} value={state.email} onChange={handleChange} required name="email" type="email" variant="outlined" label="Email" InputProps={{
            className: classes.multilineColor}} fullWidth/>

            <TextField style={{marginTop: "10px"}} required name="message" value={state.message} onChange={handleChange} variant="outlined" InputProps={{
            className: classes.multilineColor}} label="Message" fullWidth/>

            <Button style={{marginTop: "10px", }}variant="contained" color="secondary" size="large" type="submit" fullWidth >Submit</Button>
            </form>
            </Paper>
        </div>
        </div>
    );
};

export default Contact;