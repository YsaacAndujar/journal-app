import { useForm } from 'hooks/useForm'
import React from 'react'
import { Link } from 'react-router-dom'
import { startLoginEmailPassword } from 'actions/auth';
import { store } from 'store/store'
import { useSelector } from 'react-redux';
import validator from 'validator';
import { removeError, setError } from 'actions/ui';
export const LoginScreen = () => {

  const { dispatch } = store;
  // @ts-ignore
  const { loading, msgError } = useSelector(state => state.ui)
  const { handleInputChange, values } = useForm({
    email: '',
    password: '',
  })

  // const handleGoogleLogin = () => {
  //   dispatch(startGoogleLogin())
  // }

  const { email, password } = values

  const handleLogin = (e) => {
    e.preventDefault()
    if (isFormValid()) {
      dispatch(startLoginEmailPassword(email, password))
    }
  }
  const isFormValid = () => {

    if (!validator.isEmail(email)) {
      dispatch(setError('Email is not valid'))
      return false;
    } else if (password.length === 0) {
      dispatch(setError('Password is required'))
      return false;
    }
    dispatch(removeError());
    return true;
  }
  return (
    <>
      <h3 className='auth__title'>Login</h3>
      <form onSubmit={handleLogin}>
        {
          msgError && (
            <div className='auth__alert-error'>
              {msgError}
            </div>
          )
        }
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
          disabled={loading}
        >
          Login
        </button>
        <hr />
        {/* <div className='auth__social-networks'>
          <p>
            Login with social networks
          </p>
          <div 
            className="google-btn"
            onClick={handleGoogleLogin}
          >
            <div className="google-icon-wrapper">
                <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
            </div>
            <p className="btn-text">
                <b>Sign in with google</b>
            </p>
          </div>
        </div> */}
        <Link to="/auth/register" className='link'>Create new account</Link>
      </form>
    </>
  )
}
