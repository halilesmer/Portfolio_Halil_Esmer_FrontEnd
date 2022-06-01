import {
  Box,
  Container,
  Grid,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Link,
} from "@mui/material";
import * as React from "react";
import daten from "./daten.json";
/* 
import imgBookFolio from '../assets/screenshots/book_folio.webp'
import imgFilterApp from '../assets/screenshots/filter_app.webp'
import imgMangEmpl from '../assets/screenshots/manage_employees.webp'
import imgSilvConct from '../assets/screenshots/silver_connect.webp'
import imgSuperM from '../assets/screenshots/superM.webp' */
import imgDemkupu from '../assets/screenshots/dem_kupu.webp'

export const Projects = () => {

  const styleCard = {
    width: '500',
    maxWidth: '345',
    maxHeight: '650',
    boxShadow: 5,
    p: 1,
margin: 0,
  };

  return (
    <Box id="projects">
      <Container maxWidth="lm">
        <h1>
          Projects
        </h1>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
          style={{ minHeight: "100vh" }}
        >
             { daten && daten.map((item, index) => (
  <Grid item xs={2} sm={4} md={4} key={index}
            style={{ height: "fit-content" }}>
              <Card sx={styleCard}>
                <Link
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <CardMedia
                    component="img"
                    height="140"
                    image={imgDemkupu}
                  // image={item.img}
                    alt="green iguana"
                    style={{height:'300px'}}
                  />
                </Link>

                <CardContent>
                  <Typography className="cardHeader"  gutterBottom variant="h5" component="div">
                    {item.title}
                  </Typography>
                  <Typography  variant="body2" component='p' color="text.secondary">
                    {item.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    size="small"
                  >
                    Show
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            
          ))}
        </Grid>
      </Container>
    </Box>
  );
};
