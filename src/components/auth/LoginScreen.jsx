import { useForm } from 'hooks/useForm'
import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from "react-redux";
import { login } from 'actions/auth';

export const LoginScreen = () => {
  
  const dispatch = useDispatch();

  const {handleInputChange, values} = useForm({
    email: '',
    password: '',
  })

  const handleLogin = (e) =>{
    e.preventDefault()
    dispatch(login(12, 'fsa'))
  }

  const { email, password } = values
  return (
    <>
      <h3 className='auth__title'>Login</h3>
      <form onSubmit={handleLogin}>
        <input 
          type="text" 
          placeholder='Email' 
          name='email'
          value={email}
          className='auth__input'
          autoComplete='off'
          onChange={handleInputChange}
        />
        <input 
          type="password" 
          placeholder='Password' 
          name='password' 
          value={password}
          onChange={handleInputChange}
          className='auth__input'
        />
        <button 
          type='submit'
          className='btn btn-primary btn-block'
        >
          Login
        </button>
        <hr />
        <div className='auth__social-networks'>
          <p>
            Login with social networks
          </p>
          <div 
            className="google-btn"
          >
            <div className="google-icon-wrapper">
                <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
            </div>
            <p className="btn-text">
                <b>Sign in with google</b>
            </p>
          </div>
        </div>
        <Link to="/auth/register" className='link'>Create new account</Link>
      </form>
    </>
  )
}
