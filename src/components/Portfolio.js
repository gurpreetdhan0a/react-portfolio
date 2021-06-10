import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Card, CardActionArea, CardActions, CardMedia, CardContent } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import portfolio from '../assets/images/portfolio-1.png';
import portfolio2 from '../assets/images/portfolio-2.png';
import portfolio3 from '../assets/images/portfolio-3.png';
import portfolio4 from '../assets/images/portfolio-4.png';
import portfolio5 from '../assets/images/portfolio-5.png';
import portfolio6 from '../assets/images/portfolio-6.png';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkIcon from '@material-ui/icons/Link';
import Chip from '@material-ui/core/Chip';
const useStyles = makeStyles({
    media: {
      height: 290,
      padding:"-20px",
      border: "1px solid white",
      borderRadius : "2%",
    }
  });

const Portfolio = () => {
    
    const classes = useStyles();
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

    return (
        <ThemeProvider theme={theme}>
        <div id="projects" className="portfolio">
            <h1>My Latest Projects</h1>
            <div className="outer-grid">
                <div className="inner-grid">
                <Card className="card" >
                    <CardActionArea>
                        <CardMedia
                        className={classes.media}
                        image={portfolio}
                        />
                    </CardActionArea>
                    <CardContent>
                        <Typography color="primary" gutterBottom variant="h4">
                            MiniBlog
                        </Typography>
                        <div className="tags">
                        <Chip label="React.js" />
                        <Chip label="Redux" />
                        <Chip label="React-Router" />
                        <Chip label="MaterialUI" />
                        <Chip label="Node.js" />
                        <Chip label="Express" />
                        <Chip label="MongoDB" />
                        </div>
                        <Typography variant="h6" color="primary">
                            MiniBlog is an web app where you can post small blog using your Google Id, you need to be signed in to delete, update, like and post the blog. Logging out will change the React state to null and the functioanlity will be lost.
                        </Typography>
                    </CardContent>
                    <CardActions className="icons">
                        <a href="https://github.com/gurpreetdhan0a/miniblog-frontend" target="_blank" rel="noopener noreferrer" ><GitHubIcon color="primary"/></a>
                        <a href="https://miniblog-lyart.vercel.app/allPosts" target="_blank" rel="noopener noreferrer" ><LinkIcon color="primary"/></a>
                    </CardActions>
                </Card>
                </div>
                <div className="inner-grid">
                <Card className="card" >
                    <CardActionArea>
                        <CardMedia
                        className={classes.media}
                        image={portfolio2}
                        />
                    </CardActionArea>
                    <CardContent>
                        <Typography color="primary" gutterBottom variant="h4">
                            E-commerce
                        </Typography>
                        <div className="tags">
                        <Chip label="React.js" />
                        <Chip label="React-Router" />
                        <Chip label="Redux" />
                        <Chip label="HTML/CSS" />
                        <Chip label="SemanticUi" />
                        <Chip label="JavaScript" />
                        </div>
                        <Typography variant="h6" color="primary">
                            E-commerce is a website which uses redux state management system to store items in the cart. It reads information about products from the db.json file and prints the collection on the screen. Also, it uses react-router to send information to components.
                        </Typography>
                    </CardContent>
                    <CardActions className="icons">
                        <a href="https://github.com/gurpreetdhan0a/ecommerce-react" target="_blank" rel="noopener noreferrer" ><GitHubIcon color="primary"/></a>
                        <a href="https://ecommerce-react-sage.vercel.app/" target="_blank" rel="noopener noreferrer" ><LinkIcon color="primary"/></a>
                    </CardActions>
                </Card>
                </div>
                <div className="inner-grid">
                <Card className="card" >
                    <CardActionArea>
                        <CardMedia
                        className={classes.media}
                        image={portfolio3}
                        />
                    </CardActionArea>
                    <CardContent>
                        <Typography color="primary" gutterBottom variant="h4">
                            Rented
                        </Typography>
                        <div className="tags">
                        <Chip label="React.js" />
                        <Chip label="HTML/CSS" />
                        <Chip label="SemanticUi" />
                        <Chip label="JavaScript" />
                        </div>
                        <Typography variant="h6" color="primary">
                            Rennted.com is a combination of <u>realestate.com.au</u> and <u>snug.com.au</u>. One is basically seraching for properties and the other is for the application process. Rented.com uses Google Authentication to identify user and submit the application. 
                        </Typography>
                    </CardContent>
                    <CardActions className="icons">
                        <a href="https://github.com/gurpreetdhan0a/rented" target="_blank" rel="noopener noreferrer" ><GitHubIcon color="primary"/></a>
                        <a href="https://rented.vercel.app/" target="_blank" rel="noopener noreferrer" ><LinkIcon color="primary"/></a>
                    </CardActions>
                </Card>
                </div>
                <div className="inner-grid">
                <Card className="card" >
                    <CardActionArea>
                        <CardMedia
                        className={classes.media}
                        image={portfolio4}
                        />
                    </CardActionArea>
                    <CardContent>
                        <Typography color="primary" gutterBottom variant="h4">
                            Phrase Hunter
                        </Typography>
                        <div className="tags">
                        <Chip label="HTML/CSS" />
                        <Chip label="JavaScript" />
                        <Chip label="Anime.js" />
                        </div>
                        <Typography variant="h6" color="primary">
                            Phrase Hunter uses Object-oriented JavaScript fundamentals and uses class and method structure to validate the keywords and to show the random phrases. Also, it uses Anime.js for animations of the letters.
                        </Typography>
                    </CardContent>
                    <CardActions className="icons">
                        <a href="https://github.com/gurpreetdhan0a/oopGameApp-Project-4" target="_blank" rel="noopener noreferrer" ><GitHubIcon color="primary"/></a>
                        <a href="http://oopgameapp.online/" target="_blank" rel="noopener noreferrer" ><LinkIcon color="primary"/></a>
                    </CardActions>
                </Card>
                </div>
                <div className="inner-grid">
                <Card className="card" >
                    <CardActionArea>
                        <CardMedia
                        className={classes.media}
                        image={portfolio5}
                        />
                    </CardActionArea>
                    <CardContent>
                        <Typography color="primary" gutterBottom variant="h4">
                            Form Validation
                        </Typography>
                        <div className="tags">
                        <Chip label="HTML/CSS" />
                        <Chip label="JavaScript" />
                        </div>
                        <Typography variant="h6" color="primary">
                            This projects uses JavaScript to validate different inputs like Email, Credit-card, Checkbox, Dropdown selectors and much more and provides helper message using Regex.
                        </Typography>
                    </CardContent>
                    <CardActions className="icons">
                        <a href="https://github.com/gurpreetdhan0a/interactiveForm-Project-3" target="_blank" rel="noopener noreferrer" ><GitHubIcon color="primary"/></a>
                        <a href="http://interactiveform.online/" target="_blank" rel="noopener noreferrer" ><LinkIcon color="primary"/></a>
                    </CardActions>
                </Card>
                </div>
                <div className="inner-grid">
                <Card className="card" >
                    <CardActionArea>
                        <CardMedia
                        className={classes.media}
                        image={portfolio6}
                        />
                    </CardActionArea>
                    <CardContent>
                        <Typography color="primary" gutterBottom variant="h4">
                            List and Pagination
                        </Typography>
                        <div className="tags">
                        <Chip label="HTML/CSS" />
                        <Chip label="JavaScript" />
                        </div>
                        <Typography variant="h6" color="primary">
                            This project uses JavaScript to take "n" number of students and convert them into pages which is 10 students per page. You can also search for students by their names.
                        </Typography>
                    </CardContent>
                    <CardActions className="icons">
                        <a href="https://github.com/gurpreetdhan0a/listPaginationAndFiltering-Project-2" target="_blank" rel="noopener noreferrer" ><GitHubIcon color="primary"/></a>
                        <a href="http://listpaginationandfiltering.online/" target="_blank" rel="noopener noreferrer" ><LinkIcon color="primary"/></a>
                    </CardActions>
                </Card>
                </div>
            </div>
        </div>
        </ThemeProvider>
    );
};

export default Portfolio;