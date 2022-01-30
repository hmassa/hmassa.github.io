import React from 'react';
import './App.css';
import Grid from '@material-ui/core/Grid';
import Fade from '@material-ui/core/Fade';
import Job from "./interfaces/Job";
import JobCard from "./components/JobCard/JobCard";
import ProjectCard from "./components/ProjectCard/ProjectCard";
import ContactInfo from "./components/Sections/ContactInfo";
import { Experience, Projects } from "./assets/data";
import Project from './interfaces/Project';
import SkillSection from './components/Sections/SkillSection';
import Welcome from './components/Welcome/Welcome';
import Info from './components/Sections/Info';
import { useState } from 'react';

function App() {
  const [show, updateShowing] = useState(false);

  const updatePage = (value: boolean) => {
    updateShowing(value);
  }

  return (
    <div className="App">
      {!show ? <Welcome updatePage={updatePage}/> :
      <Fade in={show} timeout={1500}>
        <div>
          <Info />
          <ContactInfo />
          <div className="section">
            <h2 className="heading left">Experience</h2>
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
          <SkillSection />
        </div>
      </Fade>
    }
    </div>
  );
}

export default App;
