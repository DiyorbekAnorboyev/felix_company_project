import { useState, useEffect } from 'react'
import "./Auth.css"
import { Link, useNavigate } from 'react-router-dom'
import AuthService from '../servises/auth'

function Register() {

    const [name, setname] = useState('')
    const [email, setemail] = useState('')
    const [key, setkey] = useState('')
    const [secret, setsecret] = useState('')
    const [storageKey, setstorageKey] = useState('')

    const navigate = useNavigate()

    const newUser = {
        name,
        email,
        key,
        secret
    }

    const submitUser = async (e) => {
        e.preventDefault();
        AuthService.postRegister(newUser)
            .then(res => setstorageKey(res.key))
            .catch(err => console.log(err))
    }

    useEffect(() => {
        storageKey && navigate("/")
        window.localStorage.setItem("key", `${storageKey}`);
    }, [storageKey])

    return (
        <div>
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
                                <input onChange={e => setname(e.target.value)} required type="text" className="form-control" placeholder='Enter your name' />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Your email</label>
                                <input onChange={e => setemail(e.target.value)} required type="email" className="form-control" placeholder='Enter your email' />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Your username</label>
                                <input onChange={e => setkey(e.target.value)} required type="text" className="form-control" placeholder='Enter your username' />
                            </div>
                            <button onClick={submitUser} className='mt-4 w-100 btn btn-purple text-light'>Submit</button>
                            <div className='mt-4 text-center'>Already signed up? <Link to='/login'>Go to Sign in</Link></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Register