import React, { useState } from 'react';
import Job from "../../interfaces/Job";
import "./JobCard.css";
import { Card, CardActionArea, CardContent, CardMedia, Modal } from "@material-ui/core"
import {IoMdClose} from "react-icons/io";

const JobCard = (props: {job : Job}) => {
    const [open, setOpen] = useState(false);
    let job = props.job;

    return (
        <div>
            <Card style={{height: "100%"}}>
                <CardActionArea onClick={() => setOpen(true)}>
                <CardMedia
                    component="img"
                    alt={job.company + " logo"}
                    image={job.logo}
                    title={job.company + " logo"}
                />
                <CardContent>
                    <div className="title">{job.company}</div>
                    <div className="subtitle">{job.title}</div>
                    <div className='date'>{`${job.start} - ${job.end}`}</div>
                </CardContent>
                </CardActionArea>
            </Card>
            <div>
                <Modal open={open} onClose={() => setOpen(false)}>
                    <div className="modal">
                        <div className="close-btn-container"><IoMdClose fontSize='25' className="close-btn" onClick={() => setOpen(false)}/></div>
                        <div className="modal-title">{job.company}</div>
                        <div className="modal-subtitle">{job.title}</div>
                        <span>{job.description}</span>
                    </div>
                </Modal>
            </div>
        </div>
    )
}

export default JobCard;