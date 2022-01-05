import React from 'react';
import Project from "../../interfaces/Project";
import "./ProjectCard.css";
import { Card, CardContent, Grid } from "@material-ui/core";
import { IoMdOpen } from "react-icons/io";

const ProjectCard = (props: {project : Project}) => {
    let project = props.project;

    return (
        <Card style={{height: "100%"}}>
            <CardContent>
                <Grid container>
                    <Grid item xs={project.link ? 10 : 12}>
                        <div className="project-title">{project.title}</div>
                        <div className="project-date">{`${project.start} - ${project.end}`}</div>
                    </Grid>
                    { project.link && <Grid item xs={2}>
                        <a href={project.link} target="_blank" className="go-to"><IoMdOpen size={30} color=""/></a>
                    </Grid>}
                </Grid>
                <div className="project-description" dangerouslySetInnerHTML={{__html: project.description}}></div>
            </CardContent>
      </Card>
    )
}

export default ProjectCard;