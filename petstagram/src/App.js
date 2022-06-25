import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import {Route, Routes, Link} from 'react-router-dom'
import Main from './Main/Main';
import Navigation from './navigation/Navigation';

function App() {
  const [data, setData] = useState([])
  
    const getData = () => {
      axios.get("https://jsonplaceholder.typicode.com/posts")
      .then(res => {
        setData(res.data)
      })
      .catch(err =>{
        console.log(err)
      })
    }
    useEffect(() => {
      getData()
      }, [])
  return (
    <div className='App'>
      <nav>
        <Navigation />
      </nav>
      <main>
        <Routes>
          <Route path="/" element={<Main data={data}/>}/>
        </Routes>
      </main>
    </div>
  );
}

export default App;
