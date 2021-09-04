import React from 'react';
import './App.css';
import image from './assets/squareProfile.jpg';
import {Grid} from '@material-ui/core';
import Job from "./interrfaces/Job";
import JobCard from "./components/JobCard";
import { Experience } from "./assets/data";

function App() {
  return (
    <div className="App">
      <div className="general-info">
        <Grid container spacing={1} alignItems="center">
          <Grid item xs={12} md={6}>
            <img src={image} alt="Haley Massa profile" className="photo"/>
            <h1 className="name">Haley Massa</h1>
            <div className="text">University of Southern California<br/>MSCS - Spring 2022<br/>Los Angeles, CA</div>
          </Grid>
          <Grid item xs={12} md={6}>
            <h2 className="heading right">About</h2>
            <div className="text justify">Hello! My name is Haley, and I'm currently working towards
            my master's degree in computer science at the University of Southern California. I am originally from 
            St. Louis, MO and moved to Los Angeles in August of 2021. I graduated from the University of 
            Missouri-Columbia in May of 2021 with a B.S. in mathematics and a B.S. in computer science. 
            I have a lot of experience with frontend web development and some experience with backend web development.
            I also enjoy studying data structures and algorithms and with my background in math I am looking to get more
            experience in machine learning and data science. Really, I love just about anything that involves puzzles and code!</div>
          </Grid>
        </Grid>
        <div className="section">
          <h2 className="heading left">Experience</h2>
          <Grid container spacing={2} alignItems="stretch">
            {Experience.map((job: Job, index: number) => {
              return(
                <Grid key={index} item xs={12} md={6} lg={4}>
                  <JobCard job={job}/>
                </Grid>
              )
            })}
          </Grid>
        </div>
        <div className="section">
          <h2 className="heading right">Projects</h2>
        </div>
        <div className="section">
          <h2 className="heading left">Languages + Technologies</h2>
        </div>
      </div>
    </div>
  );
}

export default App;
