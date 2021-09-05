import React from 'react';
import Job from "../../interfaces/Job";
import "./JobCard.css";
import { Card, CardContent, CardMedia } from "@material-ui/core"

const JobCard = (props: {job : Job}) => {
    let job = props.job;

    return (
        <Card style={{height: "100%"}}>
            <CardMedia
                component="img"
                alt={job.company + " logo"}
                image={job.logo}
                title={job.company + " logo"}
            />
            <CardContent>
                <div className="title">{job.company}</div>
                <div className="subtitle">{job.title}</div>
                <div>{`${job.start} - ${job.end}`}</div>
            </CardContent>
      </Card>
    )
}

export default JobCard;