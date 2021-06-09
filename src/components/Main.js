import React from 'react';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import MailIcon from '@material-ui/icons/Mail';
const Main = () => {
    return (
        <div className="main">
            <p>WELCOME TO MY PORTFOLIO</p>
            <h1>Hi, I'm Gurpreet , <br/><p className="text animation">A Web Developer</p></h1>
            <div className="social-icons">
                <a href="https://www.linkedin.com/in/gurpreetsinghdhanoa/" target="_blank" rel="noopener noreferrer"><LinkedInIcon /></a>
                <a href="https://github.com/gurpreetdhan0a?tab=repositories" target="_blank" rel="noopener noreferrer">
                <GitHubIcon />
                </a>
                <a href="mailto:gurpreet.dhanoa@hotmail.com">
                <MailIcon />
                </a>
            </div>
            <div >
            <a href="#projects">
            <div className="arrow">
                <span></span>
                <span></span>
            </div>
            </a>
            </div>
        </div>
    );
};

export default Main;