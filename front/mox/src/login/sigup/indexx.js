import React from 'react'
import './signup.scss'

export default function Signup() {
  return (
    <div>
      <div className='container'>
        <div className='header'>
              <h1>WELCOME TO ALLAN TECH</h1>
              <lable>logo</lable><br/>
        </div>
        <div className='body'>
            <label>Enter Your firstname</label><input type='text'/><br/>
            <label>Enter Your Secondname</label><input type='text'/><br/>
          <label>Enter Your birth date</label><input type='date'/><br/>
          <label>Choose Your gender</label><br/>
          <form name='gender'>
            <input type='radio' name='gender' value='male'/><label>Male</label><br/>
           <input type='radio' name='gender'/><label>Female</label><br/>
           <input type='radio' name='gender'/><label>Others</label><br/>
          </form>

          <label>Create a strong password</label><input type='password'/><br/>
          <label>Re_Enter your password</label><input type='password'/><br/>
          <button>SIGNUP</button>
        </div>
     </div>
    </div>
  )
}
