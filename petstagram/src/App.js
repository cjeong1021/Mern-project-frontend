import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import {Route, Routes, Link} from 'react-router-dom'
import Main from './components/Main';


function App() {
  const [data, setData] = useState([])
  
    const getData = () => {
      axios.get("https://jsonplaceholder.typicode.com/posts")
      .then(res => {
        setData(res)
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
      <h1>testing push</h1>

      <main>
        <Routes>
          <Route path="/" element={<Main data={data}/>}/>
        </Routes>
      </main>
    </div>
  );
}

export default App;
