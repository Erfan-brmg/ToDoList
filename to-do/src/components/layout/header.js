import React from 'react';
import { Link} from 'react-router-dom';

export default function header() {
    return (
        <header style={headerStyle}>
            <Link style={linkStyle} to="/">Home</Link> | <Link style={linkStyle} to="/about">About</Link>
            <h1>
                TO Do List
            </h1>
            
        </header>
    )
}

const headerStyle = {
    background:  '#444',
    color: '#fff',
    textAlign: 'center',
    padding: '10px'
}

const linkStyle ={
    color: '#fff'
}