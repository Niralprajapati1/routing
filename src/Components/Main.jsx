import React from 'react'
import {Link} from 'react-router-dom'


function Main 
() {
    return (
        <div>

        
            <h1>Component Of Lifecycle</h1>
            <Link to ='/Mounting'>
            <button>Mounting</button>
            </Link>
            
            <Link to ='/Unmounting'>
            <button>Unmounting</button>
            </Link>
            
            <Link to ='/Updating'>
            <button>Updating</button>
            </Link>
        </div>
    )
}

export default Main
