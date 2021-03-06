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
import EditProfile from './UserProfile/EditProfile';

function App() {
  const [data, setData] = useState([]);
  //UserData
  const [userData, setUserData] = useState([]);
  const location = useLocation();
  const getData = () => {
    axios
      .get('https://petstagram-backend.herokuapp.com/petstagram/posts/')
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const getUserData = () => {
    axios
      .get('https://petstagram-backend.herokuapp.com/petstagram/users/')
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
    breed: '',
    type: '',
    age: null,
    picture: '',
    username: '',
    password: '',
    email: '',
    logIn: null,
    description: '',
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
        .put(
          `https://petstagram-backend.herokuapp.com/petstagram/users/${userData[index]._id}`,
          {
            logIn: true,
          }
        )
        .then((res) => {
          console.log(res.data);
          setUser(res.data);
        });
    } else {
      alert('The password you???ve entered is incorrect.');
    }
  };

  //edit user profile
  const [editProfileForm, seteditProfileForm] = useState({
    name: user.name,
    breed: user.breed,
    type: user.type,
    age: user.age,
    picture: user.picture,
    username: user.username,
    password: user.password,
    email: user.email,
    logIn: true,
    description: user.description,
  });

  const handleProfileForm = (e) => {
    seteditProfileForm({
      ...editProfileForm,
      [e.target.name]: e.target.value,
    });
  };

  const editUser = () => {
    const index = userData.indexOf(user);
    axios
      .put(
        `https://petstagram-backend.herokuapp.com/petstagram/users/${user._id}`,
        editProfileForm
      )
      .then((res) => {
        setUser(res.data);
      });
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
      .post(
        'https://petstagram-backend.herokuapp.com/petstagram/users/',
        signUpForm
      )
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
      .post(
        `https://petstagram-backend.herokuapp.com/petstagram/posts/${user._id}`,
        {
          ...postInputForm,
          likes: 0,
          user: user._id,
          likedByUsers: [],
          favedByUsers: [],
          comments: [],
        }
      )
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
          <Route
            path='user-profile'
            element={<UserProfile data={data} user={user} setUser={setUser} />}
          />
          <Route
            path='/sign-up'
            element={
              <SignUp handleSignUp={handleSignUp} createUser={createUser} />
            }
          />
          <Route path='/shop' element={<ShopBoard />} />
          <Route
            path='/edit-profile'
            element={
              <EditProfile
                editProfileForm={editProfileForm}
                handleProfileForm={handleProfileForm}
                editUser={editUser}
              />
            }
          />
        </Routes>
      </main>
    </div>
  );
}

export default App;
