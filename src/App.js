import React from 'react';
import {orginals, action, trending, ComedyMovies, HorrorMovies, ActionMovies, RomanceMovies, Documentaries} from './urls'
import './App.css';
import NavBar from './components/Navbar/NavBar';
import Banner from './components/Banner/Banner';
import RowPost from './components/RowPost/RowPost';

function App() {
  return (
    <div className='App'>
      <NavBar/>
      <Banner/>
      <RowPost url={orginals} title='Netflix Orginals'/>
      <RowPost url={action} title='Action' isSmall/>
      <RowPost url={trending} title='Trending' isSmall/>
      <RowPost url={ComedyMovies} title='Comedy Movies' isSmall/>
      <RowPost url={HorrorMovies} title='Horror Movies' isSmall/>
      <RowPost url={ActionMovies} title='Action Movies' isSmall/>
      <RowPost url={RomanceMovies} title='Romance Movies' isSmall/>
      <RowPost url={Documentaries} title='Documentaries' isSmall/>
      
    </div>
  );
}

export default App;
