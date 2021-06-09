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
const useStyles = makeStyles({
    media: {
      height: 210,
      padding:"10px",
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
                        <Typography variant="body1" color="primary">
                            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                            across all continents except Antarctica
                        </Typography>
                    </CardContent>
                    <CardActions className="icons">
                        <a href="https://github.com/"><GitHubIcon color="primary"/></a>
                        <a href="https://github.com/"><LinkIcon color="primary"/></a>
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
                        <Typography variant="body1" color="primary">
                            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                            across all continents except Antarctica
                        </Typography>
                    </CardContent>
                    <CardActions className="icons">
                        <a href="https://github.com/"><GitHubIcon color="primary"/></a>
                        <a href="https://github.com/"><LinkIcon color="primary"/></a>
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
                        <Typography variant="body1" color="primary">
                            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                            across all continents except Antarctica
                        </Typography>
                    </CardContent>
                    <CardActions className="icons">
                        <a href="https://github.com/"><GitHubIcon color="primary"/></a>
                        <a href="https://github.com/"><LinkIcon color="primary"/></a>
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
                            OOP Game App
                        </Typography>
                        <Typography variant="body1" color="primary">
                            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                            across all continents except Antarctica
                        </Typography>
                    </CardContent>
                    <CardActions className="icons">
                        <a href="https://github.com/"><GitHubIcon color="primary"/></a>
                        <a href="https://github.com/"><LinkIcon color="primary"/></a>
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
                            MiniBlog
                        </Typography>
                        <Typography variant="body1" color="primary">
                            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                            across all continents except Antarctica
                        </Typography>
                    </CardContent>
                    <CardActions className="icons">
                        <a href="https://github.com/"><GitHubIcon color="primary"/></a>
                        <a href="https://github.com/"><LinkIcon color="primary"/></a>
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
                        <Typography variant="body1" color="primary">
                            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                            across all continents except Antarctica
                        </Typography>
                    </CardContent>
                    <CardActions className="icons">
                        <a href="https://github.com/"><GitHubIcon color="primary"/></a>
                        <a href="https://github.com/"><LinkIcon color="primary"/></a>
                    </CardActions>
                </Card>
                </div>
            </div>
        </div>
        </ThemeProvider>
    );
};

export default Portfolio;