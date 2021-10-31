import React from 'react'
import './Login.scss'

function Login () {
  return (
    <div>
      <div className='login'>
        <h1 className='login-header'>HackCBS</h1>
        <form action='' method='post'>
          <div className='form-group'>
            <input
              type='text'
              placeholder='Enter Aadhaar number'
              className='login-input'
						/>
            <button type='submit' className='login-submit'>
							Login
						</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
