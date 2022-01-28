import React from "react";
import { LangsAndTechs } from "../../assets/data";
import Skill from "../../interfaces/Skill";
import Bubble from "../Bubble/Bubble";
import './Sections.css';
import { Grid } from "@material-ui/core";

const SkillSection = () => {
    return (
        <div className="skills">
            <Grid container alignItems="center">
                <Grid item xs={12} md={4}>
                    <h2 className="heading">Languages + Technologies</h2>
                </Grid>
                <Grid item xs={12} md={8}>
                    <div>
                        {LangsAndTechs.map((skill: Skill, index: number) => {
                            return (
                                <Bubble key={index} skill={skill} contact={null} color="tertiary"/>
                            )
                        })}
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default SkillSection;