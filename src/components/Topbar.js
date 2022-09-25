import React from 'react'
import { Link } from 'react-router-dom'
import '../Styles/Topbar.css'

function Topbar() {
  return (
    <div className='Top_bar'>
        <ul>
            <a>
                <Link to= '/'>Login</Link>
            </a>
            
            <a>
                <Link to = '/customer'>Customer</Link>
            </a>
          
            <a>
                <Link to = '/agent'>agent</Link>
            </a>
            <a>
                <Link to= '/superagent'>SuperAgent</Link>
            </a>
            

        </ul>
    </div>
  )
}

export default Topbar