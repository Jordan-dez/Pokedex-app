import { useState } from 'react'
import './App.css'
import Banner from './components/Banner/Banner'
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './views/Home/Home';
import Pokedex from './views/Pokedex/Pokedex';

function App() {

  return (
    <BrowserRouter>
      <Banner />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path='/Pokedex' element={<Pokedex/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
