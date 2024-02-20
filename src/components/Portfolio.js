import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import project1 from "../images/proyecto-veris.png";
import project2 from "../images/ScrollReveal.png";
import project3 from "../images/jquery.png";
import project4 from "../images/htmlDom.png";
import project5 from "../images/ORGANIZACIONES.png";
import project6 from "../images/xmlJson.png";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "#233",
    height: "100%",
  },
  cardContainer: {
    maxWidth: 345,
    margin: "3rem auto",
  },
}));

const projects = [
  {
    name: "Proyecto VERIS",
    description: "Proyecto VERIS es un sistema integral diseñado para gestionar registros en una clínica médica, destacando por su robusto sistema de autenticación y autorización. Este sistema implementa funcionalidades clave como inicio de sesión, gestión de sesiones y roles, permitiendo un control preciso sobre los datos almacenados en diversas tablas. Desarrollado principalmente con PHP.",
    image: project1,
    direccion: "https://verisgrupo1.000webhostapp.com/",
  },
  {
    name: "Scroll-Reveal UCL",
    description: `Proyecto de scroll reveal que presenta información clave sobre la competición de fútbol Uefa Champions League. Desarrollado con Bootstrap y jQuery, este proyecto utiliza efectos de desplazamiento para revelar de manera atractiva los detalles más importantes de la UCL.`,
    image: project2,
    direccion: "https://mvespin1.github.io/10038-mvespin1_ScrollReveal/",
  },
  {
    name: "TUTORIAL JQUERY",
    description: `Tutorial interactivo de jQuery que proporciona ejemplos prácticos para facilitar la comprensión de este tema. Explora conceptos clave y mejora tus habilidades en jQuery a través de ejemplos interactivos y prácticos.`,
    image: project3,
    direccion: "https://mvespin1.github.io/10038_Grupo02_PRUEBA/",
  },  
  {
    name: "TUTORIAL HTML DOM",
    description: `Tutorial interactivo sobre el Document Object Model (DOM) de HTML. Este tutorial proporciona ejemplos prácticos y actividades interactivas para fortalecer tu comprensión del DOM y mejorar tus habilidades de manipulación de elementos HTML con JavaScript.`,
    image: project4,
    direccion: "https://mvespin1.github.io/10038_Grupo02_PARTE_02",
  },
  {
    name: "ORGANIZACIONES",
    description: `Explora información clave sobre las organizaciones sin fines de lucro más importantes a nivel mundial, así como datos relevantes sobre continentes y países. Esta página te proporciona un vistazo informativo y organizado, permitiéndote conocer de manera rápida y sencilla detalles esenciales sobre distintas organizaciones y geografía global.`,
    image: project5,
    direccion: "https://mvespin1.github.io/10038_Grupo02_LABORATORIO-III/index.html",
  },
  {
    name: "XML VS. JSON",
    description: `Descubre las diferencias entre XML y JSON mediante este proyecto que ofrece comparaciones claras y ejemplos interactivos. Explora las estructuras y usos de ambas tecnologías de intercambio de datos de manera visual y educativa. Comprende las ventajas y desventajas de XML y JSON de forma práctica y accesible.`,
    image: project6,
    direccion: "https://mvespin1.github.io/10038_Grupo02_TrabajoGrupal/",
  },
];

const Portfolio = () => {
  const classes = useStyles();
  return (
    <Box component="div" className={classes.mainContainer}>
      <Grid container justify="center">
        {/* Projects */}
        {projects.map((project, i) => (
          <Grid item xs={12} sm={8} md={4} key={i}>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Project 1"
                  height="140"
                  image={project.image}
                />
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    {project.name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {project.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary" href={project.direccion}>
                  Live Demo
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Portfolio;
