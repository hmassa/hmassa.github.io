import React from "react";
import Grid from "@material-ui/core/Grid";
import image from '../../assets/squareProfile.jpg';

const Info = () => {
    return (
        <div className="general-info">
          <Grid container spacing={1} alignItems="center">
            <Grid item xs={12} md={6}>
              <img src={image} alt="Haley Massa profile" className="photo"/>
              <h1 className="name">Haley Massa</h1>
              <div className="text">B.S. Computer Science, B.S. Mathematics<br/>University of Missouri - Spring 2021<br/></div>
            </Grid>
            <Grid item xs={12} md={6}>
              <h2 className="heading right">About</h2>
              <div className="text justify">Hello! My name is Haley. 
              I graduated from the University of Missouri-Columbia in May of 2021 with a B.S. in mathematics and a B.S. in computer science 
              and I'm currently looking for a position as a full-time software engineer.
              I have a lot of experience with web development, especially frontend development.
              I also enjoy studying data structures and algorithms and with my background in math I am looking to get more
              experience in machine learning and data science. Really, I love just about anything that involves puzzles and code!</div>
            </Grid>
          </Grid>
        </div>
    )
}

export default Info;