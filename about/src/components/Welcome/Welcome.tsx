import React from 'react';
import './Welcome.css';
import Zoom from '@material-ui/core/Zoom';
import { useState } from 'react';
import Slide from '@material-ui/core/Slide';
import { useEffect } from 'react';

const Welcome = (props: {updatePage: (t: boolean) => void}) => {
    const [view, setView] = useState(true);

    useEffect(() => {
        setTimeout(
            function() {
                setView(false);
                setTimeout(
                    function() {
                        props.updatePage(true);
                    }, 2000);
            }, 3000);
    })

    return (
        <div className='welcome-div'>
            <div className='bubble-div'>
                <Zoom in={view}>
                    <span className='circle' style={{backgroundColor: 'var(--primary-light)'}}></span>
                </Zoom>
                <Zoom in={view} style={{ transitionDelay: view ? '150ms' : '0ms' }}>
                    <span className='circle' style={{backgroundColor: 'var(--primary)'}}></span>
                </Zoom>
                <Zoom in={view} style={{ transitionDelay: view ? '300ms' : '0ms' }}>
                    <span className='circle' style={{backgroundColor: 'var(--tertiary)'}}></span>
                </Zoom>
                <Zoom in={view} mountOnEnter unmountOnExit style={{ transitionDelay: view ? '450ms' : '0ms' }}>
                    <span className='circle' style={{backgroundColor: 'var(--tertiary-light)'}}></span>
                </Zoom>
            </div>
            <Slide direction='left' in={view} mountOnEnter unmountOnExit timeout={1500}>
                <h1 className="welcome-text">Hello, world!</h1>
            </Slide>
        </div>
            
    )
}

export default Welcome;