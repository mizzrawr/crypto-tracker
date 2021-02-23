import React, { useState, useRef, useEffect } from 'react';
import { Redirect } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({ name: '', password: '' });
  const [redirect, setRedirect] = useState('');

  const inputRef = useRef();

  const NAME = process.env.REACT_APP_NAME;
  const PASSWORD = process.env.REACT_APP_PASSWORD;

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setRedirect(checkLoginInfo());
  };

  const checkLoginInfo = () => {
    if (formData.name === NAME && formData.password === PASSWORD) {
      return 'success';
    } else {
      return 'please try again';
    }
  };

  if (redirect === 'success') {
    return <Redirect to={{ pathname: '/home', name: formData.name }} />;
  } else if (redirect === 'please try again') {
    return <Redirect to={{ pathname: '/loginFail', name: formData.name }} />;
  }

  return (
    <main>
      <div className="login-container">


      <form className="login-inner-container">
      <h1>Please log in</h1>
        <input
          type='text'
          name='name'
          value={formData.name}
          placeholder='Please enter your name'
          ref={inputRef}
          onChange={changeHandler}
        />
        <input
          type='password'
          name='password'
          value={formData.password}
          placeholder='Please enter your password'
          onChange={changeHandler}
        />
        <button onClick={submitHandler}>Login</button>
      </form>
      </div>
    </main>
  );
};

export default Login;