import React from 'react'
import "./Auth.css"
import { Link } from 'react-router-dom'

function Register() {
    return (
        <div className='d-flex align-items-center h-100 '>
            <div className='d-flex justify-content-center w-100'>
                <div className='auth-main-content'>
                    <h2 className='text-auth'>Sign Up</h2>
                    <div>
                        <a className="text-auth-btn w-100 btn btn-outline border" href="/"> <img src="https://img.icons8.com/color/22/000000/google-logo.png" alt='google logo' /> Continue with Google</a>
                    </div>
                    <div className='mt-3'>
                        <a className="text-auth-btn w-100 btn btn-outline border" href="/"> <img src="https://img.icons8.com/fluency/22/facebook-new.png" alt='facebook logo' /> Continue with Facebook</a>
                    </div>
                    <div className="or-seperator "><i>or</i></div>
                    <div className='W-100'>
                        <div className="mb-3">
                            <label className="form-label">Your name</label>
                            <input type="text" className="form-control" placeholder='Enter your name' />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Your email</label>
                            <input type="text" className="form-control" placeholder='Enter your email' />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Your username</label>
                            <input type="text" className="form-control" placeholder='Enter your username' />
                        </div>
                        <button className='mt-4 w-100 btn btn-purple text-light'>Submit</button>
                        <div className='mt-4 text-center'>Already signed up? <Link to='/login'>Go to Sign in</Link></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register