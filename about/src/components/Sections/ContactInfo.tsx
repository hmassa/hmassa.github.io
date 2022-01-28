import React from "react";
import Bubble from '../Bubble/Bubble';
import Contact from "../../interfaces/Contact";
import { Contacts } from "../../assets/data";
import "./Sections.css";
import { Grid } from "@material-ui/core";

const ContactInfo = () => {
    return (
        <div className="contact-div">
            <Grid container alignItems="center">
                <Grid item xs={12} md={4}>
                    <h2 className="contact-heading">Contact</h2>
                </Grid>
                <Grid item xs={12} md={8}>
                    <div>
                        {Contacts.map((contact: Contact, index: number) => {
                            return (
                                <Bubble key={index} contact={contact} skill={null} />
                            )
                        })}
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default ContactInfo;