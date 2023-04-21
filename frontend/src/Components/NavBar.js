import React from 'react'
import logo from '../Images/logo.png'

function NavBar({ createPoll }) {
  return (
    <div className='navBarContainer'>
        <div className='navBarContent'>
            <img src={logo} />
            <button
              onClick={() => {
                createPoll();
              }}
            >
                Create Poll
            </button>
        </div>
    </div>
  )
}

export default NavBar