import React from 'react';
import './App.css';
import image from './assets/squareProfile.jpg';
import {Grid} from '@material-ui/core';
import Job from "./interfaces/Job";
import JobCard from "./components/JobCard/JobCard";
import ProjectCard from "./components/ProjectCard/ProjectCard";
import Bubble from "./components/Bubble/Bubble";
import { Contacts, Experience, LangsAndTechs, Projects } from "./assets/data";
import Project from './interfaces/Project';
import Contact from './interfaces/Contact';
import Skill from './interfaces/Skill';

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
            I have a lot of experience with web development, especially frontend development.
            I also enjoy studying data structures and algorithms and with my background in math I am looking to get more
            experience in machine learning and data science. Really, I love just about anything that involves puzzles and code!</div>
          </Grid>
        </Grid>
        <div className="section">
          <h2 className="heading left">Contact</h2>
            {Contacts.map((contact: Contact, index: number) => {
              return(
                  <Bubble key={index} contact={contact} skill={null}/>
              )
            })}
        </div>
        <div className="section">
          <h2 className="heading right">Experience</h2>
          <Grid container spacing={2} alignItems="stretch">
            {Experience.map((job: Job, index: number) => {
              return(
                <Grid key={index} item xs={12} sm={6} md={4}>
                  <JobCard job={job}/>
                </Grid>
              )
            })}
          </Grid>
        </div>
        <div className="section">
          <h2 className="heading left">Projects</h2>
          <div>
          <Grid container spacing={2} alignItems="stretch">
            {Projects.map((project: Project, index: number) => {
              return(
                <Grid key={index} item xs={12} sm={6} md={4}>
                  <ProjectCard project={project}/>
                </Grid>
              )
            })}
          </Grid>
          </div>
        </div>
        <div className="section">
          <h2 className="heading right">Languages + Technologies</h2>
          <div>
            {LangsAndTechs.map((skill: Skill, index: number) => {
              return (
                <Bubble key={index} skill={skill} contact={null}/>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
