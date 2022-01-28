import React from "react";
import "../../App.css";
import Contact from "../../interfaces/Contact";
import Skill from "../../interfaces/Skill";

const Bubble = (prop: {skill: Skill | null, contact: Contact | null, color?: string | null}) => {
    const Logo = prop.contact?.logo;
    const link = prop.contact?.link;
    const data = prop.contact ? prop.contact.data : prop.skill?.data;
    const backgroundColor = prop.color ? prop.color : "primary";

    const redirect = () => {
        window.open(link, '_blank');
    }

    const style = {
        "cursor": link != null ? "pointer" : "inherit",
        "backgroundColor": `var(--${backgroundColor})`
    }

    return (
        <div className="bubble" style={style} onClick={link != null ? redirect : undefined}>
            {Logo != null && <span ><Logo style={{margin: "4px 5px 0 0"}}/></span>}
            <span>{data}</span>
        </div>
    );
}

export default Bubble;