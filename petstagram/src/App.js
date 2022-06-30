import { useEffect, useState } from 'react';
import React from 'react';
import axios from 'axios';
import './App.css';
import { Route, Routes, useLocation } from 'react-router-dom';
import Main from './Main/Main';
import Navigation from './navigation/Navigation';
import Login from './Login/Login';
import SignUp from './SignUp/SignUp';
import Upload from './PostInput/Upload';
import UserProfile from './UserProfile/UserProfile';
import ShopBoard from './Shop/ShopBoard';
import LikedPosts from './likedPosts/LikedPosts';
import SavedPosts from './likedPosts/SavedPosts';

function App() {
  const [data, setData] = useState([]);
  //UserData
  const [userData, setUserData] = useState([]);
  const location = useLocation();
  const getData = () => {
    axios
      .get('http://localhost:8000/petstagram/posts/')
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const getUserData = () => {
    axios
      .get('http://localhost:8000/petstagram/users/')
      .then((res) => {
        setUserData(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getData();
    getUserData();
  }, []);

  //User logged in
  const [user, setUser] = useState({
    name: '',
    age: null,
    username: null,
    password: '',
    email: '',
    logIn: false,
  });

  //Login
  const [loginForm, setLoginForm] = useState({
    username: '',
    password: '',
  });

  const handleLogin = (e) => {
    setLoginForm({
      ...loginForm,
      [e.target.name]: e.target.value,
    });
  };

  const validateLogin = () => {
    const userSignIn = userData.find(
      (user) => user.username === loginForm.username
    );
    if (userSignIn.password === loginForm.password) {
      console.log('welcome');
      const index = userData.indexOf(userSignIn);
      console.log(userData[index]._id);
      axios
        .put(`http://localhost:8000/petstagram/users/${userData[index]._id}`, {
          logIn: true,
        })
        .then((res) => {
          console.log(res.data);
          setUser(res.data);
        });
    } else {
      alert('The password you’ve entered is incorrect.');
    }
  };

  //Sign Up
  const [signUpForm, setSignUpForm] = useState({
    name: '',
    age: '',
    username: '',
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
    axios
      .post('http://localhost:8000/petstagram/users/', signUpForm)
      .then((res) => {
        let oldArray = [...userData];
        oldArray.push(res.data);
        setUserData(oldArray);
      });
  };

  //Post Input
  const [postInputForm, setPostInputForm] = useState({
    picture: '',
    description: '',
  });

  const handlePostChange = (e) => {
    setPostInputForm({
      ...postInputForm,
      [e.target.name]: e.target.value,
      // complete: false,
      // coordinates: {},
      // requested: false
    });
  };

  const saveUserPost = () => {
    axios
      .post(`http://localhost:8000/petstagram/posts/${user._id}`, {
        ...postInputForm,
        likes: 0,
        user: user._id,
        likedByUsers: [],
        favedByUsers: [],
        comments: [],
      })
      .then((res) => {
        let oldArray = [...data];
        oldArray.push(res.data);
        setData(oldArray);
      });
  };

  return (
    <div className='App'>
      <nav className='fullNav'>
        {location.pathname === '/' ? null : <Navigation /> &&
          location.pathname === '/sign-up' ? null : (
          <Navigation />
        )}
      </nav>
      <main>
        <Routes>
          <Route
            path='/main'
            element={<Main data={data} setData={setData} />}
          />
          <Route
            path='/'
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
          <Route
            path='/post-input'
            element={
              <Upload
                handlePostChange={handlePostChange}
                postInputForm={postInputForm}
                setPostInputForm={setPostInputForm}
                saveUserPost={saveUserPost}
              />
            }
          />
          <Route path='user-profile' element={<UserProfile data={data} />} />
          <Route
            path='/sign-up'
            element={
              <SignUp handleSignUp={handleSignUp} createUser={createUser} />
            }
          />
          <Route path='/shop' element={<ShopBoard />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
