import React from 'react';
import './Welcome.css';

const Welcome = () => {
    return (
        <div className='welcome-div'>
            <div>
                <div className='bubble-div'>
                    <span className='circle' style={{backgroundColor: 'var(--quaternary)'}}></span>
                    <span className='circle' style={{backgroundColor: 'var(--tertiary)'}}></span>
                    <span className='circle' style={{backgroundColor: 'var(--secondary)'}}></span>
                    <span className='circle' style={{backgroundColor: 'var(--primary)'}}></span>
                </div>
                <h1 className="welcome-text">Hello, world!</h1>
                <div className='bubble-div'>
                    <span className='circle' style={{backgroundColor: 'var(--primary)'}}></span>
                    <span className='circle' style={{backgroundColor: 'var(--secondary)'}}></span>
                    <span className='circle' style={{backgroundColor: 'var(--tertiary)'}}></span>
                    <span className='circle' style={{backgroundColor: 'var(--quaternary)'}}></span>
                </div>
            </div>
        </div>
            
    )
}

export default Welcome;