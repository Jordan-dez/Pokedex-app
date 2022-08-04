/******
 * Tous les imports sont ici
 */
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
import PokemonDetail from './views/PokemonDetail/PokemonDetail';
import Pokedex from './views/Pokedex/Pokedex';
import Footer from './components/Footer/Footer';


function App() {

  return (
    <BrowserRouter>
      <Banner />
      <main className='min-vh-100 mx-auto'>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path='/Pokedex' element={<Pokedex />} />
          <Route path='/pokemon/:id' element={<PokemonDetail/>} />
        </Routes>
      </main>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
