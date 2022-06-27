import { useEffect, useState } from 'react';
import React from 'react';
import axios from 'axios';
import './App.css';
import { Route, Routes, useLocation } from 'react-router-dom';
import Main from './Main/Main';
import Navigation from './navigation/Navigation';
import Login from './Login/Login';
import SignUp from './SignUp/SignUp';

function App() {
  const [data, setData] = useState([]);

  const getData = () => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  //UserData
  const [userData, setUserData] = useState([]);

  //User logged in
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    age: null,
    userId: null,
    password: '',
    email: '',
    logIn: false,
  });

  //Login
  const [loginForm, setLoginForm] = useState({
    userId: '',
    password: '',
  });

  const handleLogin = (e) => {
    setLoginForm({
      ...loginForm,
      [e.target.name]: e.target.value,
    });
  };

  const validateLogin = () => {
    const user = userData.find((user) => user.userId === loginForm.userId);
    if (user.password === loginForm.password) {
      console.log('welcome');
      setUser({
        firstName: user.firstName,
        lastName: user.lastName,
        age: user.age,
        userId: user.userId,
        password: user.password,
        email: user.email,
        logIn: true,
      });
    } else {
      alert('The password you’ve entered is incorrect.');
    }
  };

  //Sign Up
  const [signUpForm, setSignUpForm] = useState({
    firstName: '',
    lastName: '',
    age: '',
    userId: '',
    password: '',
    email: '',
    logIn: false,
  });

  const handleSignUp = (e) => {
    setSignUpForm({
      ...signUpForm,
      [e.target.name]: e.target.value,
    });
  };

  const createUser = () => {
    axios.post('http://localhost:8000/petstagram/users', signUpForm);
  };

  return (
    <div className='App'>
      <nav>
        {location.pathname === '/' ? null : <Navigation /> &&
          location.pathname === '/sign-up' ? null : (
          <Navigation />
        )}
      </nav>
      <main>
        <Routes>
          <Route path='/' element={<Main data={data} />} />
          <Route
            path='/login'
            element={
              <Login handleLogin={handleLogin} validateLogin={validateLogin} />
            }
          />
          <Route
            path='sign-up'
            element={
              <SignUp handleSignUp={handleSignUp} createUser={createUser} />
            }
          />
        </Routes>
      </main>
    </div>
  );
}

export default App;
