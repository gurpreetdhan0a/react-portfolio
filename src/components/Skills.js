import React from 'react';

const Skills = () => {
    return (
        <div id="skills" className="skills">
            <h1>Web Dev Skills</h1>
            <div className="skillIcons">
            <i className="fab fa-html5" id="icons"><h2>HTML5</h2></i>
            <i className="fab fa-css3-alt" id="icons"><h2>CSS</h2></i>
            <i className="fab fa-react" id="icons"><h2>React.js</h2></i>
            <i className="fab fa-js-square" id="icons"><h2>JavaScript</h2></i>
            <i className="fab fa-bootstrap" id="icons"><h2>BootStrap</h2></i>
            <i className="fab fa-sass" id="icons"><h2>SASS</h2></i>
            <i className="fab fa-wordpress" id="icons"><h2>Wordpress</h2></i>
            <i className="fab fa-node-js" id="icons"><h2>Node.js</h2></i>
            </div>
        </div>
    );
};

export default Skills;