import React from 'react'

export default function header() {
    return (
        <header style={headerStyle}>
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