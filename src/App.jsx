import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import './App.css'
import Navbar from './components/Navbar';
import Home from './components/Home';
import Main from './components/Main';
import Movie from './components/Movie';
import { Link } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      < Navbar />


      <Routes>
        <Route index element={<Login />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='movie/:id' element={<Movie />}></Route>
        <Route path='movies/:type' element={<Main />}></Route>
        <Route path='/*' element={<h1>Error</h1>}></Route>
      </Routes>
    </>
  )
}

export default App
