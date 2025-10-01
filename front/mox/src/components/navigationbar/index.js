import React from 'react'
import {Link} from 'react-router-dom'
import './navigation.scss'

export default function Navigation_bar() {
  return (
    <div>
      <div className='navigation'>
        <div className='left'>
            <h1>UBUNTU TECH</h1>
        </div>
        <div className='right'>
            <ul>
                <li>
                    <Link to='/'>HOME</Link>
                </li>
                <li>
                    <Link to='/services'>SERVICES</Link>
                </li>
                <li>
                    <Link to='/about'>ABOUT</Link>
                </li>
                <li>
                    <Link to='/contact'>CONTACT</Link>
                </li>
                <li>
                  <Link to='/login'>LOGIN</Link>
                </li>
                <li>
                  <Link to='/signup'>SIGNUP</Link>
                </li>
            </ul>
        </div>
      </div>
    </div>
  )
}
