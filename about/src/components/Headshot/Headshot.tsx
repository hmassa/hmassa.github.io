import React from "react";
import "../../App.css";
import image from '../../assets/squareProfile.jpg';

const Headshot = () => {

    return (
        <div className="headshot-container">
            {/* <div className='hs-bubbles'>
                <span className='circle' style={{backgroundColor: 'var(--quaternary)'}}></span>
                <span className='circle' style={{backgroundColor: 'var(--tertiary)'}}></span>
                <span className='circle' style={{backgroundColor: 'var(--secondary)'}}></span>
                <span className='circle' style={{backgroundColor: 'var(--primary)'}}></span>
            </div> */}
            <div>
                <img src={image} alt="Haley Massa profile" className="photo"/>
                <h1 className="name">Haley Massa</h1>
                <div className="text">B.S. Computer Science, B.S. Mathematics<br/>University of Missouri - Spring 2021<br/></div>
            </div>
        </div>
    );
}

export default Headshot;


