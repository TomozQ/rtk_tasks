import React from 'react'
import { Button } from '@material-ui/core'
import { useSelector, useDispatch } from 'react-redux'
import {
  // reducerのaction
  editUsername,
  editPassword,
  toggleMode,

  // fetch系の関数
  fetchAsyncLogin,
  fetchAsyncRegister,

  // 参照系の関数
  selectAuthen,
  selectIsLoginView,
} from './loginSlice'

const Login = () => {
  const dispatch = useDispatch()

  const authen = useSelector(selectAuthen)
  const isLoginView = useSelector(selectIsLoginView)
  const btnDisabler = authen.username === '' || authen.password === ''

  const login = async () => {
    if(isLoginView) {
      await dispatch(fetchAsyncLogin(authen))
    }else{
      const result = await dispatch(fetchAsyncRegister(authen))

      if(fetchAsyncRegister.fulfilled.match(result)){
        await dispatch(fetchAsyncLogin(authen))
      }
    }

  }
  
  return (
    <div className='containerLogin'>
      <div className='appLogin'>
        <h1>{isLoginView ? 'Login' : 'Register'}</h1>
        <span>Username</span>
        <input 
          type="text"
          className='inputLog'
          name='username'
          placeholder=''
          onChange={e => dispatch(editUsername(e.target.value))}
          required
        />
        <span>Password</span>
        <input 
          type="password"
          className='inputLog'
          name='password'
          placeholder=''
          onChange={e => dispatch(editPassword(e.target.value))}
          required
        />
        <div className='switch'>
          <Button
            variant='contained'
            disabled={btnDisabler}
            color='primary'
            onClick={login}
          >
            {isLoginView ? 'Login' : 'Create'}
          </Button>
        </div>
        <span
          className='switchText'
          onClick={() => dispatch(toggleMode())}
        >
          {isLoginView ? 'Create Account?' : 'Back to Login'}
        </span>
      </div>
    </div>
  )
}

export default Login
