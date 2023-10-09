import LogInStyles from './LogIn.module.css';
import Cookies from 'universal-cookie';
import jwt from 'jwt-decode';
import { useState } from 'react';
import { getToken } from '../../api/posts';
import { Navigate } from 'react-router-dom';

const cookies = new Cookies(null, { path: '/' });

// eslint-disable-next-line react-hooks/rules-of-hooks

export const LogIn = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars

  const [formData, setFormData] = useState({
    username: '',
    password: '',
  })

  const [isLogged, setIsLogged] = useState(false)

  const login = async() => {
    try {
      const jwt_token = await getToken(formData)

      const decode: any = jwt(jwt_token.accessToken);


      cookies.set("jwt_authorization", jwt_token.accessToken, {
        path: '/',
        expires: new Date(decode.exp * 1000)
      })

      setIsLogged(true)
    }
    catch {

    }

  }

  const changeFormData = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [event.target.name]: event.target.value
    }))
  }

  return (
  <section className={LogInStyles.section}>

    <div className={LogInStyles.content}>
      {
        isLogged
          ? <Navigate to='/dashboard'/>
          : null
      }
      <form  
        onSubmit={event => event.preventDefault()}
        className={LogInStyles.form}
      >
        <label className={LogInStyles.username} htmlFor="username">Username</label>
        <input
          onChange={changeFormData}
          name='username' 
          className={`${LogInStyles.input} ${LogInStyles.name}`} 
          type="text" />
        <label className={LogInStyles.password} htmlFor="password">Password</label>
        <input
          onChange={changeFormData} 
          name='password'
          className={`${LogInStyles.input} ${LogInStyles.psw}`} 
          type="password" />
          <button 
            className={LogInStyles.button} 
            onClick={login}>
            Log In
          </button>
      </form>
    </div>
  </section>
  )
}