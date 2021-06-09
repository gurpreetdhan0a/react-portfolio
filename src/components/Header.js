import React from 'react';
import { Button } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import resume from '../assets/gurpreetResume.pdf';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import MenuIcon from '@material-ui/icons/Menu';

const theme = createMuiTheme({
    palette:{
        primary: {
            main : "#FFFFFF"
        },
        secondary: {
            main: "#F9004D"
        }
    }
  });

const Header = () => {
    return (
        <ThemeProvider theme={theme}>
        <div className="header">
            <div className="logo">
                GS
            </div>
            <div>
                <ul className="menu">
                    <li><a href="#projects">Portfolio</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <a id="resume" href={resume} target="_blank"
                    rel="noreferrer">
                    <Button style={{fontWeight: "700"}} className="b-border b-hover" color="primary" variant="outlined">Resume</Button>
                    </a>
                </ul>
            </div>
            <div id="small-menu">
        <PopupState variant="popover" popupId="demo-popup-menu">
            {(popupState) => (
            <React.Fragment>
          <Button variant="contained" color="secondary" {...bindTrigger(popupState)}>
            <MenuIcon />
          </Button>
          <Menu className="small-menu" {...bindMenu(popupState)}>
            <a href="#projects"><MenuItem onClick={popupState.close}>Portfolio</MenuItem></a>
            <a href="#skills"><MenuItem onClick={popupState.close}>Skills</MenuItem></a>
            <a href={resume} target="_blank" rel="noreferrer"><MenuItem onClick={popupState.close}>Resume</MenuItem></a>
          </Menu>
            </React.Fragment>
            )}
        </PopupState>
            </div>
    
        </div>
        </ThemeProvider>
    );
};

export default Header;